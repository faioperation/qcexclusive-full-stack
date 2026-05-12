/**
 * Utility to replace placeholders like {{firstName}}, {{lastName}}, {{fullName}} in a string.
 */
export const parsePlaceholders = (text: string, lead: { name: string }) => {
  if (!text) return "";

  const nameParts = lead.name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const fullName = lead.name;

  return text
    .replace(/{{firstName}}/g, firstName)
    .replace(/{{lastName}}/g, lastName)
    .replace(/{{fullName}}/g, fullName)
    .replace(/{{name}}/g, fullName);
};
