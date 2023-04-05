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
  blurb
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

export default function Home({ settings, articles, talks, projects }) {
  return (
    <div className="page">
      <div className="background">
        <svg
          width="1084"
          height="1230"
          viewBox="0 0 1084 1230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_601_10024)">
            <g filter="url(#filter0_f_601_10024)">
              <circle cx="445.5" cy="476.5" r="200.5" fill="#DE9830" />
              <circle cx="686" cy="618" r="153" fill="#DF185B" />
              <circle cx="451" cy="821" r="133" fill="#4035E9" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_601_10024"
              x="-112"
              y="-81"
              width="1308"
              height="1392"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="178.5"
                result="effect1_foregroundBlur_601_10024"
              />
            </filter>
            <clipPath id="clip0_601_10024">
              <rect width="1084" height="1230" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="container">
        <Head>
          <title>{settings?.title}</title>
          <meta
            name="description"
            content="Welcome to the online home of Mikolaj Dobrucki. Explore his diverse skills, experiences, and interests in this unique personal website. Discover his latest projects, ideas, and inspirations, and connect with an accomplished and dynamic professional. Sorry, I generated this descrition with ChatGTP and I hope you agree it's hilarious. "
          />
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
          <section className="contact">
            <h2>say hi</h2>
            <h3>To get in touch, you can contact me at</h3>
            <p className="label">
              <a href="mailto:contact@mikolajdobrucki.com">
                contact@mikolajdobrucki.com
              </a>
            </p>
          </section>
          <footer className="label">
            © 2023 Mikolaj Dobrucki
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
