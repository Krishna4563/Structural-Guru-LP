import "./App.css";
// import img1 from "./assets/sg-logo.webp";
import starLogo from "./assets/star-logo.png";
import React, { useState, useEffect } from "react";

function App() {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 1) {
      // Timer reached 00:01, stop the timer
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    // Save the timer state to localStorage
    localStorage.setItem("timer", JSON.stringify({ minutes, seconds }));
  }, [minutes, seconds]);

  useEffect(() => {
    // Check if there's a saved timer in localStorage and set the timer accordingly
    const savedTimer = JSON.parse(localStorage.getItem("timer"));
    if (savedTimer) {
      setMinutes(savedTimer.minutes);
      setSeconds(savedTimer.seconds);
    }
  }, []);

  //accordian here

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Is this PRACTICAL STRUCTURAL DESIGN CONSULTANCY Course in online mode?",
      answer: "Yes above are details of VIDEO MODE TRAINING in 200 hrs. ",
    },

    {
      question: "What is the course fee of Video mode?",
      answer:
        "Fee will be Just Rs.3500/- one time only . This special discount will expire soon, so grab it quickly.",
    },

    {
      question: "What is the duration of Video mode?",
      answer:
        "Total 200 hrs of video training. Easily can be completed in 2 months duration, even though video access will be granted for 1 year period. You can watch in your comfortable time. ",
    },

    {
      question: "Do you have live mode also?",
      answer:
        "Yes we have live webinar mode in Skype and fee will be Rs.50000/- & 8 months duration. Fee will be monthly Rs.6250/- X 8 months EMI.",
    },

    {
      question: "How the videos will be sent?",
      answer:
        "Once payment is done, we will send 200 hrs video & files to your gmail id. You can watch videos through your google drive.",
    },

    {
      question: "Do all videos and files will have life time access?",
      answer:
        "Videos will be granted 1 year access (even though in 2 months it can be easily completed), rest all xl files, manuals,pdf books, software files, etc all can be downloadable to life time access. Videos can't be downloadable only viewable to 1 year period.",
    },

    {
      question: "Can we get certificate after completion?",
      answer:
        "Yes after submitting all exercises given in the training at the end of the course all one time, and found done without mistakes, we will issue e-certificate of course completion to your mail.",
    },

    {
      question: "Where is 70% discount payment link?",
      answer: `Link here: https://rzp.io/l/phBlT9OqT`,
    },

    {
      question: "How to get clarifications & doubts cleared?",
      answer:
        "Doubts & clarifications can be messaged to WA +91-9629121300. We will clear them through WA messages or WA calls or skype calls or Zoom calls for few mins. We clear them bi-weekly once after accumulated.",
    },

    {
      question: "What is the language taught?",
      answer:
        "Presently 200 hrs Video mode is available in English, Telugu, Hindi and Tamil languages.",
    },

    {
      question: "Is there placement assistance after course completion?",
      answer:
        "We refer cv of completed persons in our VIP business owner's circle where continuous requirements will be emerging from them. At the end of the training, the skill level will be super high that easily any design role interview will be passed. More over one can start their own consultancy too or start part time consultancy works as well as alternate profession.",
    },

    {
      question: "What are the software covered in this training?",
      answer:
        "Structural Ananlysis, Design and Detailing softwares covered are  Etabs, StaadPro, SAFE, and RCDC.",
    },

    {
      question:
        "I have no experience in design filed, still can i join and learn?",
      answer:
        "Yes. This training has been designed to teach from scratch basics level to advanced level.",
    },

    {
      question: "What is minimum qualification required for this training?",
      answer:
        "This course requires minimum Diploma in Civil Engineering level knowledge to understand.",
    },

    {
      question: "Can i switch from video mode to Live mode training any time?",
      answer:
        "Yes, by adjusting the fees any time one can join Live mode. Live mode fees should be paid for continuing in Live batch training.",
    },
  ];

  return (
    <main>
      <section className="sec-1">
        <div className="sec-1-div">
          <div className="logo-img">
            {/* <img src={img1} alt="" width={100} height={100} /> */}
          </div>

          <div className="quotes">
            <p className="quotes-2">
              WELCOME TO PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING !
            </p>
          </div>
          <div className="quotes-center">
            <div className="quote-1-div">
              <p className="quotes-1">200 Hrs Online Pre-Recorded Videos</p>
            </div>
          </div>
          <div className="course-main-div">
            <div className="courese-inner-div">
              <div className="left-div">
                <h1 className="left-title">Why You Should Join?</h1>
                <ul>
                  <li>
                    You Unlock Secrets To Create Time & Wealth In Business
                  </li>
                  <li>
                    You Learn Strong Foundational Activities To Win In Your
                    Business
                  </li>
                  <li>
                    Your Business Growth With Increased Revenue & Cashflow
                  </li>
                  <li>
                    More Profit, More Freedom, More Scale Is Guaranteed If You
                    Follow The Exact Steps Covered In The Workshop
                  </li>
                </ul>
              </div>

              <div className="center-line"></div>

              <div className="right-div">
                <h1 className="right-title">What Happens When You Join?</h1>
                <ul>
                  <li>
                    You Unlock Secrets To Create Time & Wealth In Business
                  </li>
                  <li>
                    You Learn Strong Foundational Activities To Win In Your
                    Business
                  </li>
                  <li>
                    Your Business Growth With Increased Revenue & Cashflow
                  </li>
                  <li>
                    More Profit, More Freedom, More Scale Is Guaranteed If You
                    Follow The Exact Steps Covered In The Workshop
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1>{`${String(minutes).padStart(2, "0")}:${String(
              seconds
            ).padStart(2, "0")}`}</h1>
          </div>
        </div>
      </section>

      <section className="sec-2">
        <div className="video-titles-div">
          <h1 className="yt-title1">
            ABOUT OUR PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING
          </h1>
          <div className="center-line-2"></div>
          <h2 className="yt-title2">
            Watch this explanation of this training!
          </h2>
        </div>
        <div className="video-div">
          <iframe
            width="900"
            height="550"
            src="https://www.youtube.com/embed/0npY5ja2xP8?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="sec-3">
        <h1 className="features-title">Key Features of The Training </h1>

        <div className="feature-list">
          <ul>
            <li>200 Hrs Online Pre-Recorded Videos</li>
            <li>
              {" "}
              Life time doubts and clarifications support through WA, or SKYPE,
              or ZOOM.
            </li>
            <li> 25 yrs experienced teaching in practical way.</li>
            <li>
              Structural design concepts covered from basic scratch to advanced
              level.
            </li>
            <li>Get hands on Experience with industry experts. </li>
            <li> Live Project work reviews & guidance's. </li>
            <li> Life time access for xl files, manuals, books, notes. </li>
            <li>Life time after training technical guidance support. </li>
            <li>Academic project/thesis support guidance's.</li>
            <li>Paid internship workshops training for students.</li>
            <li>
              We Provide 100% cash back, if one joined with us in business
              development team (training will be provided by us) and completed 5
              nos sales of this same training by him/her.
            </li>
          </ul>

          <div className="more-content-div">
            <p className="more-content1">Wait there's many more...</p>
            <p className="more-content2">
              Download the complete Course Brochure -{" "}
              <span>
                <button className="course-pdf"></button>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="sec-4">
        <div className="training-info-div">
          <h1 className="training-heading">TO WHOM THIS TRAINING IS FOR?</h1>
          <div className="training-targets">
            <li>Civil/Structural Aspirants</li>
            <li>Entrepreneurs</li>
            <li>Site Engineers</li>
            <li>Construction Engineers</li>
            <li>Project Engineers</li>
            <li>Planning Engineers</li>
            <li>Quantity Surveyors</li>
            <li>QA/QC Engineers</li>
            <li>Project Managers</li>
            <li>Draftsmen</li>
            <li>Design Engineers</li>
            <li>Engineering Students</li>
            <li>Architects</li>
            <li>Builders/Promoters</li>
          </div>
        </div>
      </section>

      <section className="sec-5">
        <div className="payment-info-div">
          <h1 className="payment-title">
            Procedure to Enroll Online VIDEO mode Training
          </h1>

          <div className="payment-container">
            <div className="payment-method-1">
              <p className="payment-info1">
                Our present special discount Offer training fee of JUST ₹ 3500/-
                only for the first come 100 registrations of PRACTICAL
                STRUCTURAL DESIGN CONSULTANCY TRAINING in 200 hrs video mode
                will expire soon, and there after the price of training will be
                increased. Avail before offer expiry, from link :
              </p>
              <a
                href="https://rzp.io/l/phBlT9OqT"
                target="_blank"
                rel="noreferrer"
                className="payment-link"
              >
                https://rzp.io/l/phBlT9OqT
              </a>
            </div>

            <div className="payment-center-line-forcolumn">
              <p className="or">or</p>
            </div>
            <div className="payment-method-2">
              <p className="payment-info2">
                By paying Rs.3500/- directly to UPI gpay/phonepay/Paytm no.
                9629121300. After payment send receipt & gmail id to WhatsApp
                no. +91-9629121300. We will dispatch the course contents to your
                gmail id and google drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-6">
        <div className="google-review-div">
          <h1 className="google-review-title">
            VIEW GOOGLE REVIEWS OF THE TRAINING
          </h1>
          <div className="google-div">
            <iframe
              width="900"
              height="550"
              src="https://www.youtube.com/embed/XDGgj2UELBI?si=bhSTa7UduJbwELxp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="text-review-div">
          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "It's a good platform to start from basics."
            </p>
            <h2 className="reviewer-name">Manik Reddy</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "If you want to be structural artist, this is the best platform."
            </p>
            <h2 className="reviewer-name">Shashi Shekhar Singh</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">"Great course."</p>
            <h2 className="reviewer-name">Sanjay Kakade</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "Very helpful for me. Got great exposure for structural
              engineering here. Great response for any query by their side."
            </p>
            <h2 className="reviewer-name">VK Mishra</h2>
          </div>
        </div>
      </section>

      <section className="sec-7">
        <div className="video-review-container">
          <h1>VIDEO REVIEWS OF THIS TRAINING</h1>
          <div className="video-main-div">
            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>

            <div className="video-review-card">
              <p className="reviewer-name">
                Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
                Department.
              </p>
              <div className="reviewer-video">
                <iframe
                  src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="reviewer-experience">
                75+ Civil supervisors Transformed in Design career !
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="accordian-div">
        <h1 className="accordian-heading">Frequently Asked Questions</h1>

        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{faq.answer}</div>
            )}
          </div>
        ))}
      </section>

      <footer>
        <div className="price">
          <div className="price-div">
            <div className="price-1">
              <h1>₹3500</h1>
            </div>
            <div className="price-2">
              {" "}
              <h1>₹7000</h1>
            </div>
          </div>
          <h3>Offer Ends in 15 Mins</h3>
        </div>
        <a href="https://rzp.io/l/phBlT9OqT" target="_blank" rel="noreferrer">
          <button>Book Your Spot Now</button>
        </a>
      </footer>
    </main>
  );
}

export default App;
