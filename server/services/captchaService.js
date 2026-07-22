export const verifyCaptcha = async (token) => {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json();
  сonsole.log('recaptcha:', process.env.RECAPTCHA_SECRET)
  return data.success;

};