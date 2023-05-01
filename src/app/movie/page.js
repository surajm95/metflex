import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const url = process.env.REPAID_KEY;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "d600b3bbf1mshb076a09472b2bf9p162051jsne978843007ce",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data &&
              main_data.map((curElem) => {
                return <MovieCard key={curElem?.jawSummary?.id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
