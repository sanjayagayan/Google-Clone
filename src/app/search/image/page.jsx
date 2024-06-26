import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function Page({searchParams}) {
  const startIndex = searchParams.start || "3";
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong while fetching images");
  }

  const data = await response.json();

  const results = await Promise.all(
    data.items.map(async (item) => {
      const isValid = await isValidImageUrl(item.link);
      return isValid ? item : null;
    })
  ).then((items) => items.filter((item) => item !== null));

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {results && (
        <ImageSearchResults
          results={results}
          onError={() => console.error("Failed to load image")}
        />
      )}
    </div>
  );
}

async function isValidImageUrl(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type");
    return contentType && contentType.startsWith("image/");
  } catch (error) {
    console.error(`Error checking image URL: ${url}`, error);
    return false;
  }
}
