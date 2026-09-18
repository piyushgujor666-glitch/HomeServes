import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Phone,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7]">

      {/* Top Green Bar */}
      <div className="h-1.5 bg-[#0E6B5C]" />

      <div className="flex min-h-[calc(100vh-6px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-7 text-center">

            <NavLink to="/login">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16302B]">
                <ShieldCheck
                  size={28}
                  className="text-white"
                />
              </div>

              <h1 className="mt-4 text-3xl font-bold text-[#16302B]">
                HomeServe
              </h1>

            </NavLink>

            <p className="mt-1 text-sm font-medium text-[#8A8A82]">
              Worker Portal
            </p>

          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8">

            {!submitted ? (
              <>

                {/* Heading */}
                <div className="mb-7">

                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                    <LockKeyhole
                      size={20}
                      className="text-[#0E6B5C]"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-[#16302B]">
                    Forgot Password?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#8A8A82]">
                    Enter your registered mobile number and we'll
                    send you an OTP to reset your password.
                  </p>

                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Mobile Number */}
                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#3F4844]"
                    >
                      Mobile Number
                    </label>

                    <div className="flex">

                      {/* Country Code */}
                      <select
                        value={countryCode}
                        onChange={(e) =>
                          setCountryCode(e.target.value)
                        }
                        className="w-[105px] rounded-l-xl border border-r-0 border-[#E3E1DA] bg-[#FBFAF7] px-2 text-sm font-medium text-[#16302B] outline-none focus:border-[#0E6B5C]"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+82">🇰🇷 +82</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+60">🇲🇾 +60</option>
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+880">🇧🇩 +880</option>
                        <option value="+94">🇱🇰 +94</option>
                        <option value="+93">🇦🇫 +93</option>
                        <option value="+355">🇦🇱 +355</option>
                        <option value="+213">🇩🇿 +213</option>
                        <option value="+376">🇦🇩 +376</option>
                        <option value="+244">🇦🇴 +244</option>
                        <option value="+54">🇦🇷 +54</option>
                        <option value="+374">🇦🇲 +374</option>
                        <option value="+43">🇦🇹 +43</option>
                        <option value="+994">🇦🇿 +994</option>
                        <option value="+973">🇧🇭 +973</option>
                        <option value="+375">🇧🇾 +375</option>
                        <option value="+32">🇧🇪 +32</option>
                        <option value="+501">🇧🇿 +501</option>
                        <option value="+229">🇧🇯 +229</option>
                        <option value="+975">🇧🇹 +975</option>
                        <option value="+591">🇧🇴 +591</option>
                        <option value="+387">🇧🇦 +387</option>
                        <option value="+267">🇧🇼 +267</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+673">🇧🇳 +673</option>
                        <option value="+359">🇧🇬 +359</option>
                        <option value="+226">🇧🇫 +226</option>
                        <option value="+257">🇧🇮 +257</option>
                        <option value="+855">🇰🇭 +855</option>
                        <option value="+237">🇨🇲 +237</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+238">🇨🇻 +238</option>
                        <option value="+236">🇨🇫 +236</option>
                        <option value="+235">🇹🇩 +235</option>
                        <option value="+56">🇨🇱 +56</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+269">🇰🇲 +269</option>
                        <option value="+242">🇨🇬 +242</option>
                        <option value="+243">🇨🇩 +243</option>
                        <option value="+506">🇨🇷 +506</option>
                        <option value="+385">🇭🇷 +385</option>
                        <option value="+53">🇨🇺 +53</option>
                        <option value="+357">🇨🇾 +357</option>
                        <option value="+420">🇨🇿 +420</option>
                        <option value="+45">🇩🇰 +45</option>
                        <option value="+253">🇩🇯 +253</option>
                        <option value="+20">🇪🇬 +20</option>
                        <option value="+503">🇸🇻 +503</option>
                        <option value="+372">🇪🇪 +372</option>
                        <option value="+251">🇪🇹 +251</option>
                        <option value="+679">🇫🇯 +679</option>
                        <option value="+358">🇫🇮 +358</option>
                        <option value="+995">🇬🇪 +995</option>
                        <option value="+233">🇬🇭 +233</option>
                        <option value="+30">🇬🇷 +30</option>
                        <option value="+502">🇬🇹 +502</option>
                        <option value="+504">🇭🇳 +504</option>
                        <option value="+36">🇭🇺 +36</option>
                        <option value="+354">🇮🇸 +354</option>
                        <option value="+62">🇮🇩 +62</option>
                        <option value="+98">🇮🇷 +98</option>
                        <option value="+964">🇮🇶 +964</option>
                        <option value="+353">🇮🇪 +353</option>
                        <option value="+972">🇮🇱 +972</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+225">🇨🇮 +225</option>
                        <option value="+962">🇯🇴 +962</option>
                        <option value="+7">🇰🇿 +7</option>
                        <option value="+254">🇰🇪 +254</option>
                        <option value="+965">🇰🇼 +965</option>
                        <option value="+996">🇰🇬 +996</option>
                        <option value="+856">🇱🇦 +856</option>
                        <option value="+371">🇱🇻 +371</option>
                        <option value="+961">🇱🇧 +961</option>
                        <option value="+218">🇱🇾 +218</option>
                        <option value="+370">🇱🇹 +370</option>
                        <option value="+352">🇱🇺 +352</option>
                        <option value="+261">🇲🇬 +261</option>
                        <option value="+265">🇲🇼 +265</option>
                        <option value="+960">🇲🇻 +960</option>
                        <option value="+223">🇲🇱 +223</option>
                        <option value="+356">🇲🇹 +356</option>
                        <option value="+230">🇲🇺 +230</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+373">🇲🇩 +373</option>
                        <option value="+377">🇲🇨 +377</option>
                        <option value="+976">🇲🇳 +976</option>
                        <option value="+212">🇲🇦 +212</option>
                        <option value="+258">🇲🇿 +258</option>
                        <option value="+95">🇲🇲 +95</option>
                        <option value="+264">🇳🇦 +264</option>
                        <option value="+977">🇳🇵 +977</option>
                        <option value="+31">🇳🇱 +31</option>
                        <option value="+64">🇳🇿 +64</option>
                        <option value="+505">🇳🇮 +505</option>
                        <option value="+234">🇳🇬 +234</option>
                        <option value="+47">🇳🇴 +47</option>
                        <option value="+968">🇴🇲 +968</option>
                        <option value="+507">🇵🇦 +507</option>
                        <option value="+595">🇵🇾 +595</option>
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+63">🇵🇭 +63</option>
                        <option value="+48">🇵🇱 +48</option>
                        <option value="+351">🇵🇹 +351</option>
                        <option value="+974">🇶🇦 +974</option>
                        <option value="+40">🇷🇴 +40</option>
                        <option value="+7">🇷🇺 +7</option>
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+381">🇷🇸 +381</option>
                        <option value="+421">🇸🇰 +421</option>
                        <option value="+386">🇸🇮 +386</option>
                        <option value="+27">🇿🇦 +27</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+46">🇸🇪 +46</option>
                        <option value="+41">🇨🇭 +41</option>
                        <option value="+886">🇹🇼 +886</option>
                        <option value="+66">🇹🇭 +66</option>
                        <option value="+216">🇹🇳 +216</option>
                        <option value="+90">🇹🇷 +90</option>
                        <option value="+380">🇺🇦 +380</option>
                        <option value="+598">🇺🇾 +598</option>
                        <option value="+998">🇺🇿 +998</option>
                        <option value="+58">🇻🇪 +58</option>
                        <option value="+84">🇻🇳 +84</option>
                        <option value="+967">🇾🇪 +967</option>
                        <option value="+260">🇿🇲 +260</option>
                        <option value="+263">🇿🇼 +263</option>
                      </select>

                      {/* Phone */}
                      <div className="relative flex-1">

                        <Phone
                          size={18}
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                        />

                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) =>
                            setPhone(
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          placeholder="Enter mobile number"
                          required
                          className="w-full rounded-r-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                        />

                      </div>

                    </div>

                    <p className="mt-2 text-xs text-[#A6A69C]">
                      Select your country code and enter your registered
                      mobile number.
                    </p>

                  </div>

                  {/* Security Info */}
                  <div className="flex gap-3 rounded-xl bg-[#0E6B5C]/5 p-4">

                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#0E6B5C]"
                    />

                    <p className="text-xs leading-5 text-[#6B6B62]">
                      We'll send a one-time password to verify your
                      worker account.
                    </p>

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#16302B] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0E6B5C] disabled:cursor-not-allowed disabled:opacity-70"
                  >

                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending OTP...
                      </>
                    ) : (
                      <>
                        Send OTP
                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}

                  </button>

                </form>

                {/* Back */}
                <div className="mt-6 text-center">

                  <NavLink
                    to="/login"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E6B5C] transition hover:text-[#16302B] hover:underline"
                  >
                    <ArrowLeft size={15} />
                    Back to Login
                  </NavLink>

                </div>

              </>
            ) : (

              /* Success */
              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0E6B5C]/10">
                  <CheckCircle2
                    size={34}
                    className="text-[#0E6B5C]"
                  />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#16302B]">
                  OTP Sent Successfully
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#8A8A82]">
                  We've sent a password reset OTP to:
                </p>

                <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-xl bg-[#FBFAF7] px-5 py-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E6B5C]/10">
                    <Phone
                      size={17}
                      className="text-[#0E6B5C]"
                    />
                  </div>

                  <p className="text-sm font-semibold text-[#16302B]">
                    {countryCode} {phone}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#16302B] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
                >
                  Back to Login
                  <ArrowRight size={17} />
                </button>

              </div>
            )}

          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#A6A69C]">
            <ShieldCheck size={14} />
            <span>Your account information is protected.</span>
          </div>

          <p className="mt-4 text-center text-xs text-[#B2B0A8]">
            © {new Date().getFullYear()} HomeServe. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;