import React, { useState, useCallback } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ReferralDashboard = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleReCaptchaVerify = useCallback((token: string) => {
    setRecaptchaToken(token);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!recaptchaToken) {
      setLoading(false);
      setErrorMessage("Invalid reCAPTCHA.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const referralCode = formData.get("referralCode") as string;
    const email = formData.get("email") as string;
    const paymentNumber = formData.get("paymentNumber") as string;
    const phoneNumber = formData.get("phoneNumber") as string;

    try {
      // Check if the referral code, email, payment number, or phone number already exists in Firestore
      const referralCollection = collection(db, "referral");
      const codeQuery = query(
        referralCollection,
        where("referralCode", "==", referralCode)
      );
      const emailQuery = query(referralCollection, where("email", "==", email));
      const paymentNumberQuery = query(
        referralCollection,
        where("paymentNumber", "==", paymentNumber)
      );
      const phoneNumberQuery = query(
        referralCollection,
        where("phoneNumber", "==", phoneNumber)
      );

      const [
        codeSnapshot,
        emailSnapshot,
        paymentNumberSnapshot,
        phoneNumberSnapshot,
      ] = await Promise.all([
        getDocs(codeQuery),
        getDocs(emailQuery),
        getDocs(paymentNumberQuery),
        getDocs(phoneNumberQuery),
      ]);

      if (!codeSnapshot.empty) {
        setLoading(false);
        setErrorMessage(
          "Referral code already exists. Please use a different code."
        );
        return;
      }

      if (!emailSnapshot.empty) {
        setLoading(false);
        setErrorMessage("Email already exists. Please use a different email.");
        return;
      }

      if (!paymentNumberSnapshot.empty) {
        setLoading(false);
        setErrorMessage(
          "Payment number already exists. Please use a different payment number."
        );
        return;
      }

      if (!phoneNumberSnapshot.empty) {
        setLoading(false);
        setErrorMessage(
          "Phone number already exists. Please use a different phone number."
        );
        return;
      }

      // Add form data to Firestore
      await addDoc(referralCollection, {
        referralCode: referralCode,
        email: email,
        paymentNumber: paymentNumber,
        phoneNumber: phoneNumber,
        recaptchaToken: recaptchaToken,
        ...Object.fromEntries(formData.entries()), // Add all other form fields
      });

      setReferralCode(referralCode);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting the form:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  if (success) {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h1 className="text-white text-3xl font-bold mb-2">
          Form Submitted Successfully!
        </h1>
        <p className="text-gray-300 text-lg">
          Check your email for further instructions.
        </p>
        <p className="text-white text-lg">
          COPY YOUR REFERRAL CODE:{" "}
          <span
            className="text-emerald-500 font-semibold cursor-pointer hover:text-emerald-400"
            onClick={() => {
              navigator.clipboard.writeText(referralCode);
              alert("Referral code copied to clipboard!");
            }}
          >
            {referralCode}
          </span>
        </p>
      </div>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcOEyQqAAAAAPbo_7EDZINmhbXHcWDWj3SluFHU">
      <div className="bg-black min-h-screen">
        <div className="py-12 px-6 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-white text-center text-2xl font-semibold">
            Referral form for COLOSSUS Hackathon
          </h1>

          <div className="bg-slate-900 p-8 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium"
                  htmlFor="payment-number"
                >
                  Your Payment Number:
                </label>
                <p className="text-gray-300 text-[12px] mb-1">
                  Phone number used in UPI Transaction
                </p>
                <input
                  type="tel"
                  required
                  id="paymentNumber"
                  name="paymentNumber"
                  pattern="\d{10}"
                  maxLength={10}
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Your Contact Email:
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="phone-number"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  name="phoneNumber"
                  pattern="\d{10}"
                  maxLength={10}
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="upi-id"
                >
                  UPI ID:
                </label>
                <input
                  type="text"
                  required
                  id="upiId"
                  name="upiId"
                  placeholder="eg: xxyy@upi"
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="referral-code"
                >
                  Your Unique Referral Code:
                </label>
                <input
                  type="text"
                  required
                  name="referralCode"
                  id="referralCode"
                  placeholder="eg: HACKIT"
                  onInput={(e) => {
                    const input = e.target as HTMLInputElement;
                    input.value = input.value.toUpperCase();
                  }}
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="referral-code"
                >
                  Instagram ID:
                </label>
                <input
                  type="text"
                  name="instagramId"
                  id="instagramId"
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="referral-code"
                >
                  College Name:
                </label>
                <input
                  type="text"
                  required
                  name="collegeName"
                  id="collegeName"
                  className="w-full p-2 bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input type="checkbox" name="terms" id="terms" required />
                <label
                  className="text-white text-sm font-medium p-2"
                  htmlFor="terms"
                >
                  <span className="text-white text-base">
                    By clicking, you are agreeing to the{" "}
                    <a
                      href="https://hackcolossus.tech/termsandconditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-400 hover:text-violet-500 underline underline-offset-2"
                    >
                      terms and conditions
                    </a>{" "}
                    of Colossus Hackathon
                  </span>
                </label>
              </div>
              <GoogleReCaptcha onVerify={handleReCaptchaVerify} />

              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-2 bg-emerald-600 text-white font-bold py-2 rounded ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-violet-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
            {errorMessage && (
              <div className="mt-4 p-2 bg-red-600 text-white rounded">
                {errorMessage.split("\n").map((msg, index) => (
                  <div key={index}>{msg}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ReferralDashboard;
