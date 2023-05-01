import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Singlemovie = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

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
  let main_data = null;
  if (!data?.length > 0) {
    return <div>No Data Found for that id "{id}"</div>;
  } else {
    main_data = data[0].details;
  }

  return (
    <>
      {main_data && (
        <div className={styles.container}>
          <h2 className={styles.movie_title}>
            Netflix \{" "}
            <span> {main_data?.type ? main_data?.type : "No Data"} </span>{" "}
          </h2>
          <div className={styles.card_section}>
            <div>
              {main_data?.backgroundImage?.url && (
                <Image
                  src={main_data?.backgroundImage?.url}
                  alt={main_data.title}
                  width={600}
                  height={300}
                />
              )}
            </div>
            <div>
              <h1>{main_data?.title}</h1>
              <p>{main_data?.synopsis}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlemovie;
