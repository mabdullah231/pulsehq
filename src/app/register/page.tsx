"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Moon, Sun, User, Building, Phone, CreditCard } from "lucide-react";
import { useTheme } from "next-themes";

export default function RegisterPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<"free" | "trial" | "paid" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    orgName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const totalSteps = selectedPlan === "paid" ? 4 : 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const canProceedStep1 = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.orgName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
    );
  };

  const handleNext = () => {
    if (step === 1 && !canProceedStep1()) return;
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!selectedPlan) return;
      if (selectedPlan === "paid") {
        setStep(3);
      } else {
        setStep(4);
      }
      return;
    }
    if (step === 3) {
      if (!payment.cardNumber || !payment.expiry || !payment.cvc) return;
      setStep(4);
      return;
    }
    if (step === 4) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        router.push("/dashboard");
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
            className={`h-2 w-2 rounded-full transition-all ${
              i + 1 === step
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
              Join PulseHQ
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Get real insights into your organization&apos;s work.
            </p>
          </div>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Signal-driven analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Role-based dashboards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Privacy-first design</span>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Create account</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Get started with PulseHQ today
            </p>

            {renderStepIndicator()}

            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                      First name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Organization name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Phone number (optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
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
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Plan Selection - Three options */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Choose your plan</p>
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedPlan === "free"
                      ? "border-[#6366F1] bg-[#6366F1]/5"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  onClick={() => setSelectedPlan("free")}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Free</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">$0 – 5 projects, 10 members, 7‑day history</p>
                </div>
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedPlan === "trial"
                      ? "border-[#6366F1] bg-[#6366F1]/5"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  onClick={() => setSelectedPlan("trial")}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">14‑day Trial</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Full access, no payment required</p>
                </div>
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedPlan === "paid"
                      ? "border-[#6366F1] bg-[#6366F1]/5"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  onClick={() => setSelectedPlan("paid")}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Pro – Paid</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">$49/month – unlimited everything</p>
                </div>
              </div>
            )}

            {/* Step 3: Payment Details (only for paid plan) */}
            {step === 3 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Enter payment details</p>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Card number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={payment.cardNumber}
                      onChange={handlePaymentChange}
                      className="w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={payment.expiry}
                      onChange={handlePaymentChange}
                      className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      value={payment.cvc}
                      onChange={handlePaymentChange}
                      className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center py-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Registration successful!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {isSubmitting ? "Redirecting to dashboard..." : "All set! Redirecting..."}
                </p>
                {isSubmitting && (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && step < 4 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !canProceedStep1()) ||
                  (step === 2 && !selectedPlan) ||
                  (step === 3 && (!payment.cardNumber || !payment.expiry || !payment.cvc))
                }
                className="ml-auto px-5 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === totalSteps ? "Complete" : "Next"}
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
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