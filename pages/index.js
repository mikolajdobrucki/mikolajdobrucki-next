import Head from "next/head";
import Link from "next/link";
import { PortableText, sanityClient, urlFor } from "../lib/sanity";
import Header from "../components/header";
import { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/carousel";

const settingsQuery = `*[_type == "siteSettings"][0]{
  title,
  socialMedia,
  blurb,
  sketchbook
}`;

const articlesQuery = `*[_type == "article"]  | order(datePublished desc) {
  _id,
  title,
  publication,
  datePublished,
  url
}`;

const talksQuery = `*[_type == "talk"] | order(date desc) {
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
    <div className="page">
      <div className="background">
        <div className="ellypse ellypse--yellow"></div>
        <div className="ellypse ellypse--red"></div>
        <div className="ellypse ellypse--purple"></div>
      </div>
      <div className="container">
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
                        {article.title}
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
                    <a href={talk.url} target="_blank" rel="noreferrer">
                      <img
                        src={urlFor(talk.image).size(200, 100).url()}
                        srcSet={`
                          ${urlFor(talk.image).size(320, 160).url()} 320w,
                          ${urlFor(talk.image).size(640, 320).url()} 640w
                          `}
                        alt={talk.title}
                      />
                    </a>
                    <p className="label">
                      <a>{talk.conference}</a> / {talk.date}
                    </p>
                    <h3>
                      <a href={talk.url} target="_blank" rel="noreferrer">
                        {talk.title}
                      </a>
                    </h3>
                  </article>
                ))}
            </Carousel>
          </section>
          <section className="projects">
            <h2>side projects</h2>
            <div className="projects__grid">
              {projects?.length > 0 &&
                projects.map((project) => (
                  <article key={project._id}>
                    <h3>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.name}
                      </a>
                    </h3>
                    <p className="label">{project.description}</p>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </div>
      <div className="secondary">
        <div className="secondary__content">
          <section className="sketchbook">
            <h2>sketchbook</h2>
            <div className="sketchbook__grid">
              {settings.sketchbook?.length > 0 &&
                settings?.sketchbook.map((sketch) => (
                  <article key={sketch._id}>
                    <img
                      src={urlFor(sketch).width(320).url()}
                      srcSet={`
                          ${urlFor(sketch).width(320).url()} 320w,
                          ${urlFor(sketch).width(640).url()} 640w
                          `}
                      alt={sketch.caption}
                    />
                  </article>
                ))}
            </div>
          </section>
          <footer className="label">
            ?? 2022 Mikolaj Dobrucki
            <br />
            All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const settings = await sanityClient.fetch(settingsQuery);
  const articles = await sanityClient.fetch(articlesQuery);
  const talks = await sanityClient.fetch(talksQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { settings, articles, talks, projects } };
}
