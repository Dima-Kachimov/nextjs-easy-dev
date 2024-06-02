export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) =>
    res.json(),
  );

  return films.results.map((films: any) => ({
    slug: films.title.replace(/\s+/g, '-').toLowerCase(),
  }));
}

async function getData() {
  const res = await fetch('https://swapi.dev/api/films');
  const data = await res.json();
  return data.results;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData();

  return (
    <div>
      My Post: {params.slug}
      <ul>
        {data.map((el: any) => (
          <li key={el.title}>{el.title.replace(/\s+/g, '-').toLowerCase()}</li>
        ))}
      </ul>
    </div>
  );
}
