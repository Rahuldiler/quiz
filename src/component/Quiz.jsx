import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Quiz = () => {
  const [que, setQue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState();
  const [correct, setCorrect] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const URL =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(URL);
      try {
        setQue(res?.data?.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const isCorrectAns = que[page]?.correct_answer
    ?.toLocaleLowerCase()
    ?.includes(selectAnswer?.toLocaleLowerCase());

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < 9) {
      setPage(page + 1);
    } else if (isCorrectAns === true) {
      setCorrect(correct + 1);
    } else {
      navigate("/result", { state: { correct } });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <p className="question__line">
            <span className="fw-bold">Que:{page + 1} </span>
            {que[page]?.question}{" "}
          </p>
          <p className="fw-bold mb-0">Options :</p>
          {que[page]?.incorrect_answers?.map((i, id) => {
            return (
              <label htmlFor={i} key={id}>
                <input
                  type="radio"
                  name="answer"
                  id={i}
                  value={i}
                  onChange={(e) => setSelectAnswer(e.target.value)}
                />
                {i}
              </label>
            );
          })}
          <label htmlFor={que[page]?.correct_answer}>
            <input
              type="radio"
              name="answer"
              id={que[page]?.correct_answer}
              value={que[page]?.correct_answer}
              onChange={(e) => setSelectAnswer(e.target.value)}
            />
            {que[page]?.correct_answer}
          </label>
          <div className="d-flex w-100 justify-content-between">
            <button type="button" className="nextPrevBtn" onClick={handlePrev}>
              Prev Que
            </button>
            <button type="button" className="nextPrevBtn" onClick={handleNext}>
              Next Que
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Quiz;
