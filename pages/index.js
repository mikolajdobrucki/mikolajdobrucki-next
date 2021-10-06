import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { PortableText, sanityClient, urlFor } from "../lib/sanity";
import Header from "../components/header";
import { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/carousel";

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
}`;

const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  description,
  url
}`;

export default function Home({ recipes, settings, articles, talks, projects }) {
  return (
    <>
      <Head>
        <title>{settings?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header data={settings} />

      <main>
        <section className="blurb">
          <PortableText blocks={settings?.blurb} />
        </section>
        <section className="articles">
          <Carousel name="articles">
            {articles?.length > 0 &&
              articles.map((article, index) => (
                <article
                  key={article._id}
                  className="carousel__item"
                  id={`article-${index}`}
                >
                  <p className="label">
                    <a>{article.publication}</a> / {article.datePublished}
                  </p>
                  <h3>
                    <a href={article.url} target="_blank" rel="noreferrer">
                      {article.title} {index}
                    </a>
                  </h3>
                </article>
              ))}
          </Carousel>
        </section>
        <section className="talks">
          <Carousel name="talks">
            {talks?.length > 0 &&
              talks.map((talk) => (
                <article key={talk._id}>
                  {/* <img src={urlFor(talk.image).url()} alt={talk.title} /> */}
                  <p className="label">
                    <a>{talk.conference}</a> / {talk.date}
                  </p>
                  <h3>
                    <a href={talk.url} target="_blank" rel="noreferrer"></a>
                    {talk.title}
                  </h3>
                </article>
              ))}
          </Carousel>
        </section>
        <section className="projects">
          <h2>side projects</h2>
          {projects?.length > 0 &&
            projects.map((project) => (
              <article key={project._id}>
                {/* <img src={urlFor(talk.image).url()} alt={talk.title} /> */}
                <h3>
                  <a href={project.url} target="_blank" rel="noreferrer"></a>
                  {project.name}
                </h3>
                <p className="label">{project.description}</p>
              </article>
            ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const settings = await sanityClient.fetch(settingsQuery);
  const articles = await sanityClient.fetch(articlesQuery);
  const talks = await sanityClient.fetch(talksQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { settings, articles, talks, projects } };
}
