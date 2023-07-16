"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import * as qna from "@tensorflow-models/qna";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import Loading from "@/components/Loading";
import { BiSolidSend } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/UserSlice";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

interface Answer {
  endIndex: number;
  score: number;
  startIndex: number;
  text: string;
}

interface PassageResp {
  done: boolean;
  name: string;
  passages: string[];
}
export default function Home() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [model, setModel] = useState<qna.QuestionAndAnswer>();
  const [loading, setLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<string[]>([""]);
  const [passage, setPassage] = useState<string>();
  const [answers, setAnswers] = useState<(Answer | null)[]>([]);
  const [nQuestions, setNQuestions] = useState<number[]>([0]);
  const [count, setCount] = useState<number>(1);
  const [passageResp, setPassageResp] = useState<PassageResp>();
  const [currentPassageI, setCurrentPassageI] = useState<number>(-1);

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newQuestions = [...question!];
    newQuestions[index] = e.target.value;
    setQuestion(newQuestions);
  };

  const handleAnswerSubmit = async (index: number) => {
    const currentQuestion = question![index];
    const newAnswers = [...answers];
    const data = await Predict(currentQuestion);

    newAnswers[index] = data![0];
    setAnswers(newAnswers);
  };

  const Load = async () => {
    const mod = await qna.load();
    setModel(mod);
    setLoading(false);
  };

  const Predict = async (current: string) => {
    try {
      const ans = await model?.findAnswers(current, passage!);
      return ans;
    } catch {}
  };

  const LoadPassages = async () => {
    const _resp = await fetch("http://localhost:8080/api/user/passages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON?.stringify({ token: localStorage?.getItem("__token_") }),
    });
    const _data = await _resp.json();
    setPassageResp(_data);
    console.log({ resp: _data });
  };

  const handleLogout = () => {
    try {
      setLoading(true);
      dispatch(logout());
      localStorage?.removeItem("__token_");
      toast.success("Logged out!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.reload();
    } catch {}
  };

  useEffect(() => {
    try {
      if (localStorage?.getItem("__token_") !== null) {
        Load();
        LoadPassages();
      } else {
        router?.push("/auth/login");
      }
    } catch {}
  }, []);

  return (
    <div className="bg-[var(--bg-primary)] h-screen">
      {loading === true && <Loading />}
      <ToastContainer />
      <main
        className={`${inter.className} flex lg:flex-row flex-col justify-center items-start`}
      >
        <SideBar
          name={passageResp?.name!}
          handleLogout={handleLogout}
          passages={passageResp?.passages!}
          setCurrentPassageI={setCurrentPassageI}
        />
        <MobMenu />
        <div className="w-full py-8 px-5 md:px-10 lg:px-0">
          <div className="w-full space-y-3 flex justify-center items-center flex-col">
            <textarea
              rows={8}
              placeholder="Passage"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
              }}
              className="py-4 px-5 rounded-lg bg-[var(--bg-sec)] w-full lg:w-1/2 outline-none caret-white text-[var(--text-color)]"
              onChange={(e) => setPassage(e.target.value)}
            ></textarea>
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-end space-y-3">
              <button
                className="py-3 px-5 rounded-lg bg-[var(--bg-sec)] outline-[var(--button-bg)]"
                onClick={() => {
                  setNQuestions((prevState) => [...prevState, count]);
                  setQuestion((prevState) => [...prevState!, ""]);
                  setAnswers((prevState) => [...prevState, null]);
                  setCount(count + 1);
                }}
              >
                <MdAdd color="rgb(176, 178, 194)" />
              </button>
              {nQuestions?.map((item, i) => {
                return (
                  <div
                    className="w-full flex justify-center items-center flex-col"
                    key={i}
                  >
                    <div className="w-full flex justify-center items-center">
                      <input
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                        }}
                        type="text"
                        placeholder="Question"
                        className="py-2 px-5 rounded-l-lg bg-[var(--bg-sec)] w-full outline-none caret-white text-[var(--text-color)]"
                        value={question![i]}
                        onChange={(e) => handleQuestionChange(e, i)}
                      />
                      <button
                        className="py-3 px-5 rounded-r-lg bg-[var(--bg-sec)] outline-[var(--button-bg)]"
                        onClick={() => handleAnswerSubmit(i)}
                      >
                        <BiSolidSend color="rgb(176, 178, 194)" />
                      </button>
                    </div>
                    {answers[i] && (
                      <p className="text-white text-sm mt-2 w-full text-start">
                        {answers[i]?.text}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const SideBar = ({
  name,
  passages,
  handleLogout,
  setCurrentPassageI,
}: {
  name: string;
  passages: string[];
  handleLogout: () => void;
  setCurrentPassageI: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="bg-[#202123] hidden text-[var(--text-color)] lg:flex flex-col justify-between text-sm px-4 py-7 h-full fixed left-0 top-0">
      <div className="h-full space-y-1">
        <button
          onClick={() => setCurrentPassageI(-1)}
          className="py-3 px-5 rounded-lg bg-transparent hover:bg-[var(--bg-primary)] w-full flex justify-center items-start"
        >
          <MdAdd color="rgb(176, 178, 194)" />
        </button>
        {passages?.map((item, i) => {
          return (
            <button
              onClick={() => setCurrentPassageI(i)}
              key={i}
              className="py-2 px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-start items-center space-x-3"
            >
              <FiMessageSquare color="var(--text-color)" />
              <p>{item.substring(0, 25)}...</p>
            </button>
          );
        })}
      </div>
      <hr />
      <div className="pt-5">
        <button className="px-6 rounded-lg hover:bg-[var(--bg-primary)] cursor-default flex justify-between items-center space-x-3 w-full">
          <p className="py-2">{name}</p>
          <span
            className="py-2 text-xs hover:bg-[var(--bg-primary)] cursor-pointer px-2"
            onClick={() => handleLogout()}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

const MobMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  try {
    document?.addEventListener("scroll", () => setOpen(false));
  } catch {}

  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 lg:hidden">
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center pl-5">
            <button
              onClick={() => setOpen(!open)}
              className="py-3 px-5 rounded-lg bg-transparent hover:bg-[#202123] w-full flex justify-center items-start"
            >
              <GiHamburgerMenu color="rgb(176, 178, 194)" />
            </button>
          </div>
          <div
            className={`absolute top-0  ${
              open ? "left-0" : "-left-[100%]"
            } duration-500 w-full h-full bg-[#202123] py-4 flex flex-col justify-between overflow-hidden`}
          >
            <div>
              <div className="flex justify-end px-3">
                <button className="py-2 px-2" onClick={() => setOpen(!open)}>
                  <GiHamburgerMenu color="rgb(176, 178, 194)" />
                </button>
              </div>

              <div className="text-[var(--text-color)] lg:flex flex-col justify-between text-sm px-4 py-7 h-full">
                <div className="h-full space-y-1">
                  <button className="py-3 px-5 rounded-lg bg-transparent hover:bg-[var(--bg-primary)] w-full flex justify-center items-start">
                    <MdAdd color="rgb(176, 178, 194)" />
                  </button>
                  <button className="w-full py-2 px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-start items-center space-x-3">
                    <FiMessageSquare color="var(--text-color)" />
                    <p>Google LLC is an Ameri...</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
