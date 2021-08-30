/* eslint-disable */

import { useState } from "react";
import { useRouter } from "next/router";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";

const recipeQuery = `*[_type ==  "recipe" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  mainImage,
  ingredient[]{
    _key,
    unit,
    wholeNumber,
    fraction,
    ingredient->{
      name
    }
  },
  instructions,
  likes,
}`;

export default function OneRecipe({ data, preview }) {
  if (!data) return <div>Loading...</div>;

  const { data: recipe } = usePreviewSubscription(recipeQuery, {
    params: { slug: data.recipe?.slug.current },
    initialData: data,
    enabled: preview,
  });

  const [likes, setLikes] = useState(data?.recipe?.likes);

  const router = useRouter();

  if (router.isFallback) {
    return <div>loading…</div>;
  }

  const addLike = async () => {
    const res = await fetch("/api/handle-like", {
      method: "POST",
      body: JSON.stringify({ _id: recipe._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  return (
    <article>
      <h1>{recipe.name}</h1>

      <button onClick={addLike}>{likes} ❤️</button>

      <main>
        <img src={urlFor(recipe?.mainImage).url()} alt="" />
        <div>
          <ul>
            {recipe.ingredient?.map((ingredient) => (
              <li key={ingredient?._key}>
                {ingredient?.wholeNumber} {ingredient?.fraction}{" "}
                {ingredient?.unit} {ingredient?.ingredient?.name}
              </li>
            ))}
          </ul>
        </div>
        <h3>instructions</h3>
        <PortableText blocks={recipe?.instructions} />
      </main>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const recipe = await sanityClient.fetch(recipeQuery, { slug });
  return { props: { data: { recipe }, preview: true } };
}
