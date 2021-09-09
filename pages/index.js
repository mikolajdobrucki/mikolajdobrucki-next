import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";
import Header from "../components/header";
import { useState } from "react";
import ReactDOM from 'react-dom';

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage
}`;

const settingsQuery = `*[_type == "siteSettings"][0]{
  title,
  socialMedia,
  blurb
}`;

const articlesQuery = `*[_type == "article"]{
  _id,
  title,
  publication,
  datePublished,
  url
}`;

const talksQuery = `*[_type == "talk"]{
  _id,
  title,
  conference,
  image,
  date,
  url
}`

const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  description,
  url
}`

export default function Home({ recipes, settings, articles, talks, projects }) {
  
  const [activeCarouselItem, useActiveCarouselItem] = useState(2);

  
  const showNextItem = () => {
    const scrollWidth = window.innerWidth > 1312 ? 1312 : window.innerWidth;
    console.log(scrollWidth);
    const currentPosition = document.querySelector('#carousel').scrollLeft;

    document.querySelector('#carousel').scrollLeft = currentPosition + scrollWidth;
  }
  
  const showPrevItem = () => {
    const scrollWidth = window.innerWidth > 1312 ? 1312 : window.innerWidth;
    console.log(scrollWidth);
    const currentPosition = document.querySelector('#carousel').scrollLeft;

    document.querySelector('#carousel').scrollLeft = currentPosition - scrollWidth;
  }

  return (
    <>
      <Head>
        <title>{settings?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header data={settings} />

      <main>
        <section className="blurb">{settings.blurb}</section>
        <section className="articles">
          <h2>articles</h2>
          <button onClick={showPrevItem}>prev</button>
          <button onClick={showNextItem}>next</button>
          <div className="carousel" id="carousel">
            {articles?.length > 0 &&
              articles.map((article, index) => (
                <article key={article._id} className="carousel__item" id={`article-${index}`}>
                  <p>
                    {article.publication} / {article.datePublished}
                  </p>
                  <h3>
                    <a href={article.url} target="_blank" rel="noreferrer">
                      {article.title} {index}
                    </a>
                  </h3>
                </article>
              ))}
          </div>
        </section>
        <section className="talks">
          <h2>talks</h2>
          {talks?.length > 0 &&
            talks.map((talk) => (
              <article key={talk._id}>
                {/* <img src={urlFor(talk.image).url()} alt={talk.title} /> */}
                <p>{talk.conference} / {talk.date}</p>
                <h3><a href={talk.url} target="_blank" rel="noreferrer"></a>{talk.title}</h3>
              </article>
            ))
          }
        </section>
        <section className="projects">
          <h2>side projects</h2>
          {projects?.length > 0 &&
            projects.map((project) => (
              <article key={project._id}>
                {/* <img src={urlFor(talk.image).url()} alt={talk.title} /> */}
                <h3><a href={project.url} target="_blank" rel="noreferrer"></a>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))
          }
        </section>
      </main>

      {/* <h1>Welcome to Mikolaj kitchen</h1>

      <ul>
        {recipes?.length > 0 &&
          recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link href={`/recipes/${recipe.slug.current}`}>
                <a>
                  <img src={urlFor(recipe.mainImage).url()} alt="" />
                  <span>{recipe.name}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul> */}
    </>
  );
}

export async function getStaticProps() {
  const recipes = await sanityClient.fetch(recipesQuery);
  const settings = await sanityClient.fetch(settingsQuery);
  const articles = await sanityClient.fetch(articlesQuery);
  const talks = await sanityClient.fetch(talksQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { recipes, settings, articles, talks, projects } };
}
