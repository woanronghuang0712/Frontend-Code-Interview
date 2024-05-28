import React from 'react';
import { EmphasisStr, CodeSpan, Paragraph ,RequirementList} from '../components/utils';

const paragraphs = {
  introParagraph: [
      "Welcome to our frontend engineer assessment! This test is designed to evaluate your frontend development skills and related knowledge.",
      "Please read each question carefully and imagine them as typical work tasks. Respond in the same manner you would during your regular work.",
      "You can create any folders, ts/tsx/css files you need at any position that you think is appropriate.",
      "Here's the requirements for the assessment:",
    ],
  
  paragraph1:["For this task, your objective is to refactor the current page following your coding conventions and best practices. Look for opportunities to enhance code structure, eliminate redundancy, clarify variable names, and simplify complex logic."
      ],
  paragraph2: [
      "For this task, your objective is to implement a page where a mouse traverses a maze to find cheese.",
      <>
        During server-side rendering, you need to hit the
        <CodeSpan>/api/maze
        </CodeSpan>
        endpoint to fetch the maze map array and display all the maps along with
        their respective start buttons on the screen. When the user clicks the start
        button, the mouse on that map will begin to solve the maze using Depth-First
        Search (DFS), with each step taking 100 ms.
      </>,
      <>
        Meanwhile, the start button will disappear, replaced by a reset button.
        Clicking the reset button will stop the mouse's movement, reset the map to
        its initial state, and the reset button will be replaced by the start button
        again.
      </>,
      <>
        <a
          className="underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1"
          href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
          target="_blank"
        >
          Click
        </a>
        to watch a demonstration of the expected behavior.
      </>, "Note that:"
    ],
  paragraph3:["For this task, your objective is to create and apply a global shared layout. The layout should consist of:"
    ],
};

const requirements = {
  intro_requirements: [
      <>
        <EmphasisStr first>NEVER</EmphasisStr> change anything in the directories
        named in the pattern<CodeSpan>**/api/**</CodeSpan>
      </>,
      "Style with tailwindcss and css file.",
      <>
        Use<CodeSpan>axios</CodeSpan>to fetch data
      </>,
      "Implement Responsive Web Design (RWD) with a breakpoint at 768px (md in tailwindcss default breakpoints)",
      <>
        <p>
          Submit the URL of your answer repository by
          <EmphasisStr>
            23:59 on the 5th day after receiving the questions,
          </EmphasisStr>
          and cease answering (pushing commits). For example: if you receive the
          questions on Mar 1st, you should submit the answer by 23:59 on Mar 5th.
        </p>
      </>,
    ],
  problem3_requirements: [
      <>
        A header displaying
        <EmphasisStr>'Jedi Software'</EmphasisStr> that collapses when scrolling and
        reappears when scrolling stops.
      </>,
      <>
        A collapsible menu offering redirection to the homepage and
        <CodeSpan>/find-the-cheese</CodeSpan>.
      </>,
    ],
  problem2_requirements: [
      <>
        Put this page at the route
        <CodeSpan>/find-the-cheese</CodeSpan>, and title it
        <strong className="mx-1">'Find the cheese'.</strong>
      </>,
      <>
        Add description, "Click 'Start' to see how the mouse find the cheese by
        using DFS!", below page title
      </>,
      <>
        The color of the walls is<CodeSpan>green-800</CodeSpan>
      </>,
      <>
        The color of the path is<CodeSpan>lime-50</CodeSpan>
      </>,
      <>
        The icon of the mouse is<CodeSpan>LuRat</CodeSpan>
        with color<CodeSpan>neutral-500</CodeSpan>
      </>,
      <>
        The icon of the cheese is
        <CodeSpan>FaCheese</CodeSpan>
        with color
        <CodeSpan>amber-400</CodeSpan>
      </>,
      <>
        Highlight current path with color<CodeSpan>amber-200</CodeSpan>
      </>,
      "The button has a background color of amber-500, and a hover background color of amber-400.",
      <>
        <CodeSpan>/api/maze</CodeSpan>simulates an endpoint on another server, so
        you need to use axios to fetch the data.
      </>,
    ],
};




const problems = [
  {
    idx: 1,
    title: "Problem 1: Refactoring",
    contents: (
      <Paragraph paragraphs={paragraphs.paragraph1} />
    ),
  },
  {
    idx: 2,
    title: "Problem 2: Maze",
    contents: (
      <>
        <Paragraph paragraphs={paragraphs.paragraph2} />
        <RequirementList items={requirements.problem2_requirements} />
      </>
    ),
  },
  {
    idx: 3,
    title: "Problem 3: Layout",
    contents: (
      <>
        <Paragraph paragraphs={paragraphs.paragraph3} />
        <RequirementList items={requirements.problem3_requirements} />
      </>
    ),
  },
];



export {paragraphs,requirements,
  problems
};