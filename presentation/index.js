// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import BadApp from '../assets/BadApp';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  markdown: require("../assets/markdown.png"),
  real: require("../assets/Real.png"),
  calendar: require("../assets/Calendar.png"),
  row: require("../assets/Row.png"),
  dayPicker: require("../assets/DayPicker.png"),
  day: require("../assets/Day.png"),
  noPleaseNo: require("../assets/noPleaseNo.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              High performance redux
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold caps textColor="white">Make webapps great again</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} fit textColor="primary" textFont="primary">
              Let's build a clone of Cake HR
            </Heading>
            <Image src={images.real.replace("/", "")} margin="40px auto 0" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Only 3 components
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Image src={images.calendar.replace("/", "")} margin="0 auto" height="400px"/>
            <Text textSize="0.8em" margin="40px 0">(...just a wrapper)</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Image src={images.row.replace("/", "")} margin="0 auto" height="300px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Image src={images.dayPicker.replace("/", "")} margin="0 auto" height="300px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} textColor="white">Our data</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/dataBad")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps textColor="primary">First approach</Heading>
            <Text textSize="1.2em" textColor="black">Let's connect the wrapper to all the data in the store</Text>
            <Appear>
              <Image src={images.calendar.replace("/", "")} margin="40px auto" height="300px"/>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textSize="1.2em" textColor="white">Component:</Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/calendarPageBad")}
              margin="20px auto"
            />
            <Text textSize="1.2em" textColor="white">Store:</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/calendarPageStateBad")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps textColor="white">Congratulations!</Heading>
            <Heading size={1.5} caps bold textColor="black">You just created a performance monster!</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <BadApp />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps textColor="white">What went wrong?</Heading>
            <Markdown margin="30px auto">
              {`
\`CalendarPage\` is connected to the **entire** data

=> **One change** in the data and the **entire** page renders again
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.noPleaseNo.replace("/", "")} />
          <Slide transition={["slide"]} bgColor="primary">
            <Heading fit caps bold>Try #2</Heading>
            <Text textSize="1.5em">SPOILER: this one will be good</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit bold>Let's normalize the state</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/storeOk")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="white">
            <Heading fit textColor="primary">Let's connect two components</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Heading size={4} textColor="black" bgColor="white" margin="50px 10px">
                    Calendar Page
                  </Heading>
                  <Image src={images.calendar.replace("/", "")} margin={10} height="200px"/>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Heading size={4} textColor="black" bgColor="white" margin="50px 10px">
                    Calendar Row
                  </Heading>
                  <Image src={images.row.replace("/", "")} margin={10} height="200px"/>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} textColor="white">CalendarPage</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/calendarPageGood")}
              margin="20px auto"
            />
            <Markdown margin="30px auto">
              {`
Now subscribed to \`state.users\`, a list unlikely to change over time

=> Unlikely to cause re-renders of the entire page!
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="white">CalendarRow</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/calendarRowGood")}
              margin="20px auto"
            />
            <Markdown margin="30px auto">
            {`
Each row is subscribed to just its corresponding data

=> **Changes in the data of a user will cause a re-render of only its corresponding row**
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="white">Gotcha #1</Heading>
            <Text textSize="1.5em" textColor="black" margin="30px auto">
              Q: Can't I just do this?
            </Text>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/calendarPageGoodCritical")}
                margin="20px auto"
              />
              <Markdown margin="30px auto">
                {`
A: No, \`state\` is immutable; every mutation creates a new \`state.data\`


=> \`Object.keys(store.data)\` will create a new array at every mutation


=> Unwanted rendering of the entire page every time
                `}
              </Markdown>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="white">Gotcha #2</Heading>
            <Markdown margin="30px auto">
              {`
Q: When does \`mapStateToProps\` get called?
              `}
            </Markdown>
              <Markdown margin="100px auto">
                {`
A: At every change in \`state\` or \`ownProps\`. Hence it's important to keep it as light as possible.
If you can't avoid heavy computations inside it, use the library \`reselect\`.
                `}
              </Markdown>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="white">Gotcha #3</Heading>
            <Markdown margin="30px auto">
              {`
Q: I read on Twitter/Medium/Hacker News that I should use \`makeMapStateToProps\` for better performance, is it true?
              `}
            </Markdown>
              <Markdown margin="100px auto">
                {`
A: That was a nasty trick in \`react-redux v4\`. In \`v5\` it's not needed anymore. It will actually make performance worse.
                `}
              </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="white">
            <Heading size={1} textColor="primary">Can we do even better?</Heading>
            <Text textColor="black" textSize="1.5em">Of course...by furtherly normalizing!</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} caps>Hint</Heading>
            <Text textColor="black" textSize="1.5em">Make your store look something like this:</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/storeAwesome")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1}>Let me know your solution</Heading>
            <Text textColor="black" textSize="1.5em">And thank you for listening :)</Text>
            <Link href="https://github.com/giuband/redux-examples">https://github.com/giuband/redux-examples</Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
