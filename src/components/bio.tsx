import React, {useState} from "react";
import {Blockquote, Spinner} from "@blueprintjs/core";
import portrait from "./ajones-hijab.jpg";

export default function Bio() {
  return <div className="row">
    <div className="col-xs-3">
        <LazyPortrait src={portrait} />
    </div>
    <Blockquote className="col-xs-7">
    If modernity is not just the acceptance of the scientific method over the authority of religious reasoning, then we must also accept that our legal origins, much like ufos, might not be something that has been seen, but definitely exists. On such grounds we must state that Andrew Lyle Jones was born April 27th 1979 in Baltimore, MD. However no crab cake is remembered, no orioles games attended, whatever effect that city had on the nascent stirring of consciousness in an infant that stirring remains a mystery. The son of a graduate from John Hopkins medical school, Andrew was moved at an early age to Woodly Gardens, MD where his father worked at the NIH. Only a single red radio flyer wagon and a snowy day is remembered from those times. Our protagonist’s origins really began in earnest in Houston, TX. The son of an oncologist and a nurse, Andrew attended Robert’s and West U. elementary schools, Lanier middle school, high school for the health professions, and Lamar High School. He took classes in biology from the Houston natural science museum, studied photography at the Glassel, and played magic: the gathering along with numerous video games. Mr. Jones also fiddled with code warrior C tutorials and Mtropolis on a mac. Anime was somewhere in the mix too. An earnest reader Mr. Jones consumed books by Jack Kerouac, Ann Rice, and entirely by mistake was ushered into existentialism by Andre Gide. In 1995 Mr. Jones moved to Memphis, TN to attend Memphis University School. In Memphis Mr. Jones was introduced to the works of Franz Kafka, Thomas Pynchon, Pavement, and Aphex Twin. An education procured, Andrew attended Rollins College in Winter Park, FL from 1997 to 2001. In Florida Mr. Jones played the laptop in several free improv groups and later promoted raves. He worked as a substitute teacher while writing synthesizers in a language called Supercollider. In 2003 our boy got his first big break: a school in Seoson, South Korea paid to fly him out to teach in Asia. 10 years go by. South Korea, Hong Kong, Taiwan, Japan, Singapore, Malaysia, Thailand, Indonesia, Cambodia, Vietnam, China, and Laos are all at least visited. Indie games are made using javascript and HTML, multimedia art exhibits occur, doodles are made in Processing, nascent iPad apps are made, and then in 2014 the big leagues call: Mr. Jones is formally hired as a software developer. Various Asian countries are at least revisited, websites are made, ill fated surf/ remote work attempts are made, and then finally in Nov 2018, 15 years the wiser, Mr. Jones returns to the U.S.A. Money is made, software specifications are consumed, and standing desks are purchased.
    </Blockquote>
  </div>
}

// just a small image loader with a spinner
function LazyPortrait({src}) {
  const [showImg, setShow] = useState(false);
  return(<div>
    <Spinner style={{display: showImg ? 'none': 'flex'}} />
    <img
      className="portrait"
      style={{display: showImg ? 'block': 'none'}}
      src={src}
      onLoad={() => setShow(true)} />
  </div>)
}