import axios from "axios";
import { aboutMe } from "../constants";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = -70;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};


export async function fetchContributionsWithRetry(maxRetries = 1) {
  let attempts = 0;

  while (attempts <= maxRetries) {
    try {
      const result = await fetchContributions();
      return result; // If successful, return the result
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts} failed: ${error.message}. Retrying...`);

      if (attempts > maxRetries) {
        console.log("Max retries reached. Returning last error.");
        // Optionally, return a formatted error message or throw
        return { error: error.message };
      }
    }
  }
}

