--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name text,
    description text,
    frameworks text,
    live_url text,
    image_path text,
    image_desktop text,
    user_summary text,
    tech_logos text[] DEFAULT '{}'::text[]
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, name, description, frameworks, live_url, image_path, image_desktop, user_summary, tech_logos) FROM stdin;
3	Inside Space	Immersive interactive space-themed web experience showcasing advanced animations and creative UI design.	React, JavaScript, GSAP, Swiper.js, CSS, Responsive Design	https://inside-space.vercel.app/	/assets/projects/inside-space.png	/assets/projects/desktop/inside-space.png	Explore space through immersive animations and interactive storytelling. A visually engaging experience designed to inspire curiosity.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png}
1	User Portfolio Management	Full-stack platform enabling users to manage personal portfolios, projects, and profile data with CRUD operations and PostgreSQL integration.	React, JavaScript, Node.js, Express.js, PostgreSQL, REST API, Axios	https://user-portofolio-management.vercel.app/	/assets/projects/portfolio.png	/assets/projects/desktop/portfolio.png	Create and manage your personal portfolio with ease. Upload projects, customize your profile, and showcase your work in a clean, professional interface.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png,/assets/projects/node_logo.png,/assets/projects/express-logo.png,/assets/projects/postgress_logo.png,/assets/projects/axios_logo.png,/assets/projects/api_logo.png}
4	WhatToWatch	Movie and TV discovery app consuming an external API to explore content with dynamic rendering and responsive UI.	React, JavaScript, REST API, Axios, CSS, Responsive Design	https://watowatch-trainnig.vercel.app/	/assets/projects/watowatch.png	/assets/projects/desktop/watowatch.png	Discover movies and TV shows instantly. Browse, explore, and find your next favorite content with a smooth and responsive interface.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png,/assets/projects/axios_logo.png,/assets/projects/api_logo.png}
5	Quizy	Interactive quiz application featuring dynamic questions, score tracking, and real-time feedback.	React, JavaScript, CSS, Responsive Design	https://quizy-ruby.vercel.app/	/assets/projects/quizy.png	/assets/projects/desktop/quizy.png	Test your knowledge with interactive quizzes and real-time scoring. A fun and engaging way to challenge yourself.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png}
6	Weather App	Real-time weather application providing forecasts and conditions using external OpenWeatherMap API integration.	React, JavaScript, OpenWeatherMap API, Axios, CSS, Responsive Design	https://weather-xi-flax.vercel.app/	/assets/projects/weather.png	/assets/projects/desktop/weather.png	Get accurate weather forecasts in real time. Stay informed with clean visuals and clear data presentation.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png,/assets/projects/axios_logo.png,/assets/projects/api_logo.png}
7	Recipe App — HomeChef	Recipe browsing and search application allowing users to explore meals by category with detailed ingredient views.	React, JavaScript, REST API, Axios, CSS, Responsive Design	https://recipe-two-bice.vercel.app/	/assets/projects/recipe.png	/assets/projects/desktop/recipe.png	Browse recipes effortlessly and discover meals by category. Simple navigation meets rich ingredient details.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png,/assets/projects/axios_logo.png,/assets/projects/api_logo.png}
2	Task Manager	Full-stack task management application with Redux state handling, backend API, and PostgreSQL database connection.	React, Redux, JavaScript, Node.js, Express.js, PostgreSQL, REST API	https://task-list-inky.vercel.app/	/assets/projects/task.png	/assets/projects/desktop/task.png	Stay organized and boost productivity with an intuitive task manager. Plan, track, and complete your daily goals effortlessly.	{/assets/projects/react_logo.png,/assets/projects/javascript_logo.png,/assets/projects/node_logo.png,/assets/projects/express-logo.png,/assets/projects/postgress_logo.png,/assets/projects/api_logo.png}
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 7, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

