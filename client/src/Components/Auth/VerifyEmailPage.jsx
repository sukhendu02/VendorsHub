import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function VerifyEmailPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [message, setMessage] = useState("");
   const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const verifyEmail = async () => {
      const token = params.get("token");
      const id = params.get("id");

      if (!token || !id) {
        setStatus("error");
        setMessage("Invalid verification link.");
             startCountdown();
        return;
      }

      try {
        const res = await axios.post(
          `http://localhost:3000/api/auth/verify-email`,
          { token, id }
        );
        // console.log(res);
        if (res.data.success) {
          setStatus("success");
          setMessage("Email verified successfully! Redirecting to login...");
          toast.success("Email verified successfully! You can now log in.");
          setTimeout(() => navigate("/vendor/auth/signin"), 5000);
          startCountdown();
        }
        //  else if (
        //   res.data.message === "Invalid or expired token" ||
        //   res.data.message === "Token already used"
        // ) {
        //   setStatus("error");
        //   setMessage(" Verification link has expired or is invalid.");
        //   toast.error("Verification link expired or invalid. Please request a new one.");
        //   setTimeout(() => navigate("/vendor/auth/signin"), 2500);
        // } else {
        //   setStatus("error");
        //   setMessage("⚠️ Something went wrong. Please try again later.");
        //   toast.error("Something went wrong. Try again later.");
        //   setTimeout(() => navigate("/vendor/auth/signin"), 2500);
        // }
      } catch (err) {

        if (err.response && err.response.data) {
    const backendMsg = err.response.data.message;

    if (backendMsg.includes("expired") || backendMsg.includes("invalid")) {
      setStatus("error");
      setMessage(" Verification link has expired or is invalid.");
      toast.error("Verification link expired or invalid. Please request a new one.");
      setTimeout(() => navigate("/vendor/auth/signin"), 5000);
    } else {
      setStatus("error");
      setMessage("⚠️ Something went wrong. Please try again later.");
      toast.error("Something went wrong. Try again later.");
      setTimeout(() => navigate("/vendor/auth/signin"), 5000);
    }
  } else {
    // Network / server crash / no response
    setStatus("error");
    setMessage("⚠️ Server not reachable. Please try again later.");
    toast.error("Server not reachable. Try again later.");
    setTimeout(() => navigate("/vendor/auth/signin"), 5000);
  }

  startCountdown();
     
      }
    };

    verifyEmail();
  }, [params, navigate]);

   const startCountdown = () => {
    let time = 5;
    setCountdown(time);

    const interval = setInterval(() => {
      time -= 1;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(interval);
        navigate("/vendor/auth/signin");
      }
    }, 1000);
  };



  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className=" rounded-2xl p-8 text-center max-w-md w-full">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-orange-500 border-b-4 border-transparent mx-auto mb-6"></div>
            
            {status==="loading" ? (
                                                  <CircularProgress
                                                    className="text-primary"
                                                    size={25}
                                                    style={{ color: "orange" }}
                                                  />
                                                )
                                              : (
                                      ""
                                    )}            
            <h2 className="text-xl font-semibold text-gray-800">
              Verifying your email...
            </h2>
            <p className="text-gray-500 mt-2">Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-6 h-14 w-14 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700">
              Email Verified!
            </h2>
            <p className="text-gray-500 mt-2">{message}</p>
            <p className="text-slate-600">Redirecting in {countdown} seconds...</p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-6 h-14 w-14 flex items-center justify-center rounded-full bg-red-100 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-700">
              Verification Failed
            </h2>
            <p className="text-gray-500 mt-2">{message}</p>
            <p className="text-slate-600">Redirecting in {countdown} seconds...</p>
          </>
        )}
      </div>
    </div>
  );
}
