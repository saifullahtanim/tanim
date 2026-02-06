export function verifyEmailAddress(email: string): boolean {
  if (!email) return false;

  // Soft but reliable email validation (portfolio-safe)
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email.trim());
}
