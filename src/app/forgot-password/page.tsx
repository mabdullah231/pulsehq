"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Moon, Sun, ArrowLeft, KeyRound } from "lucide-react";
import { useTheme } from "next-themes";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const totalSteps = 3;

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // only single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const canProceedStep1 = () => email && email.includes("@");
  const canProceedStep2 = () => otp.every(d => d.length === 1);
  const canProceedStep3 = () =>
    newPassword && confirmPassword && newPassword === confirmPassword;

  const handleNext = () => {
    if (step === 1 && !canProceedStep1()) return;
    if (step === 2 && !canProceedStep2()) return;
    if (step === 3 && !canProceedStep3()) return;

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final step – simulate submission
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        router.push("/login"); // or show success message
      }, 1000);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center gap-2 mb-6">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${i + 1 === step
                ? "w-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
                : i + 1 < step
                  ? "bg-[#6366F1]"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1929] to-[#1E293B] p-4 sm:p-6 animate-pop-in">
      <div className="flex w-full max-w-5xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        {/* Left Branding */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 p-6 flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PulseHQ</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Reset password
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We&apos;ll help you regain access to your account.
            </p>
          </div>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Secure verification</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Quick & easy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Back in minutes</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-3/5 p-6 sm:p-6 relative">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="absolute top-4 right-4 sm:top-4 sm:right-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <div className="flex items-center justify-center gap-2 mb-4 md:hidden">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">PulseHQ</span>
          </div>

          <div className="max-w-sm mx-auto mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Reset password</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {step === 1 && "Enter your email to receive a verification code"}
              {step === 2 && "Check your email for the 6‑digit code"}
              {step === 3 && "Create a new password"}
            </p>

            {renderStepIndicator()}

            {/* Step 1: Email */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: OTP */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  Enter the 6‑digit code sent to {email}
                </p>
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => console.log("Resend OTP")}
                  className="text-sm text-[#6366F1] hover:underline"
                >
                  Resend code
                </button>
              </div>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    New password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Confirm password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !canProceedStep1()) ||
                  (step === 2 && !canProceedStep2()) ||
                  (step === 3 && !canProceedStep3())
                }
                className={`ml-auto px-5 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {step === totalSteps ? (isSubmitting ? "Resetting..." : "Reset password") : "Next"}
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
              Remember your password?{" "}
              <Link href="/login" className="font-medium text-[#6366F1] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}