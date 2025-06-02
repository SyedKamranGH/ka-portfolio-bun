export const formatDate = (dateString: string): string => {
  if (dateString === "Present") return "Present";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

export const calculateDuration = (
  startDate: string,
  endDate: string
): string => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0) return `${months} month${months !== 1 ? "s" : ""}`;
  if (months === 0) return `${years} year${years !== 1 ? "s" : ""}`;

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${
    months !== 1 ? "s" : ""
  }`;
};
