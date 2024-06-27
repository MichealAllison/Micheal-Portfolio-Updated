import React from "react";

function article_1() {
	return {
		date: "18 Feb 2024",
		title: "The Nigerian Job Hunter’s Adventure",
		description:
			"Picture this: You, a determined Nigerian job seeker armed with a sparkling resume and a heart full of hope, embark on the treacherous journey of job applications. ",
		link: "https://medium.com/@mazitech/the-nigerian-job-hunters-adventure-8e6aa3a6ce8c",

		keywords: [
			"The Nigerian Job Hunter’s Adventure",
			"Job Seekers",
			"Micheal Allison",
			"Nigeria",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

function article_2() {
	return {
		date: "13 Oct 2023",
		title: "Common challenges faced by tech-savvy individuals and how to solve those challenges",
		description:
			"Tech-savvy individuals often have access to a vast amount of information, which can be overwhelming and lead to information overload.",
		link: "https://medium.com/@mazitech/common-challenges-faced-by-tech-savvy-individuals-and-how-to-solve-those-challenges-21243a660786",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"AI",
			"Micheal Allison",
			"tech-savvy",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "25 Nov 2023",
		title: "Embracing the Power of Learning and Curiosity in the Workplace 💡",
		description:
			"In my journey working on diverse projects with incredible teams, I’ve learned a valuable lesson: the real power lies in the willingness to learn and ask questions.",
		link: "https://medium.com/@mazitech/embracing-the-power-of-learning-and-curiosity-in-the-workplace-a566b3c10258",
		style: ``,
		keywords: [
			"Embracing the Power of Learning and Curiosity in the Workplace",
			"Workplace",
			"Micheal Allison",
			"Curiosity",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "14 Oct 2023",
		title: "How Networking on LinkedIn Has Transformed My Career",
		description:
			"LinkedIn isn’t just a social platform; it’s a powerful tool that has significantly impacted my professional journey. Let me share how networking on LinkedIn has played a pivotal role in my career.",
		link: "https://medium.com/@mazitech/how-networking-on-linkedin-has-transformed-my-career-1ba9b9e7b1bf",
		style: ``,
		keywords: ["Networking", "Career", "Micheal Allison", "Linkedin"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "26 Sep 2023",
		title: "The facts about life",
		description:
			"You don’t know who’s waiting for your rubbish (as you call it ) to build up their own ideas",
		link: "https://medium.com/@mazitech/the-facts-about-life-edbe28abcd5e",
		style: ``,
		keywords: ["Life", "fact", "Micheal Allison", "fact about life"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		date: "20 Jun 2024",
		title: "Invest in Yourself: The Advantages of Skill Ownership",
		description:
			"In the professional realm, having a specialized skill can set you apart from the competition. Employers are always on the lookout for candidates who bring something unique to the table. Skills such as digital marketing, project management, or data analysis are highly sought after and can open doors to better job opportunities and higher salaries.",
		link: "https://medium.com/@mazitech/invest-in-yourself-the-advantages-of-skill-ownership-8c21dd4e1c20",
		style: ``,
		keywords: ["Invest", "Skill", "Micheal Allison", "yourself"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4, article_5];

export default myArticles;
