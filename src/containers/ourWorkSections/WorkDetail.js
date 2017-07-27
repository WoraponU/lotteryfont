import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { WorkDetailComponent } from 'Components/ourWorkSections'
import { withLang } from 'Hocs';

class WorkDetail extends Component {
  state = {
    contentLoaded: {
      mainHeader: '',
      subHeader1: '',
      subHeader2: '',
      subHeader3: '',
      content1: '',
      content2: '',
      content3: '',
      imageInfo: {
        client: '',
        service: '',
        year: '',
      },
      logoPath: ''
    }
  }

  componentWillReceiveProps({ match: { params: { id, lang } } }) {
    const tempContent = {
      mac5: {
        th: {
          mainHeader: 'เว็บไซต์ซอฟต์แวร์ ที่ทันสมัย ใช้งานได้ครบทุกฟังก์ชั่น พร้อมความสวยงาม',
          subHeader1: 'เว็บไซต์ของซอฟต์แวร์ ERP ที่เนื้อหาเยอะ จะจัดการอย่างไร?',
          subHeader2: 'ดีไซน์ที่สวยงาม ทำให้ผู้ใช้งานรู้สึกแปลกตา และประทับใจ',
          subHeader3: 'ในมือถือก็ใช้งานได้อย่างสวยงามราบรื่น',
          content1: 'เว็บไซต์ที่มีเนื้อหาค่อนข้างเยอะ และต้องการสื่อสารกับลูกค้าให้ครบถ้วน พร้อมการบริการออนไลน์ในการให้คำปรึกษาเกี่ยวกับซอฟต์แวร์ที่เข้าถึงลูกค้าได้ ทำให้เราชาวฮ็อบบิซต้องค้นหาตัวช่วยที่จะทำให้เว็บไซต์สามารถทำงานได้ในทุกส่วน หรือง่ายๆคือการค้นหา Plug-in ที่เหมาะสมในการใช้งาน เพื่อทุ่นแรงของลูกค้าในการทำงาน การจัดการเนื้อหาก็เช่นกัน เราเน้นการจัดหมวดหมู่ของเนื้อหา (Grouping) โดยดูถึงการใช้งาน และพฤติกรรมการใช้งานของลูกค้าเป็นหลัก เช่น เมนูแบบไหนที่คนนิยมกดเข้าเพื่อดูรายละเอียด หรือปุ่มแบบไหนที่ดึงดูดให้คนกดเพื่อเข้าอ่านข้อมูลมากที่สุด',
          content2: 'ปกติแล้วรูปแบบการดีไซน์เว็บไซต์ของโปรแกรมซอฟต์แวร์มักจะออกมาดูจริงจัง เป็นทางการ และเต็มไปด้วยเนื้อหา ทำให้ลูกค้าส่วนใหญ่(มักจะ)ไม่กดอ่าน และเข้ามาเพื่อมองหาแต่สิ่งที่ตนเองต้องการและจากไป เช่น ราคา หรือ ฟังก์ชั่นหลักของซอฟท์แวร์ โดยไม่ได้รู้สึกจดจำเกี่ยวกับเว็บไซต์สักเท่าไหร่นัก ฮ็อบบิซเน้นความสำคัญในการทำให้เว็บไซต์น่าใช้งาน และติดตาลูกค้าแม้ออกจากเว็บไซต์ไปแล้ว โดยการทำเว็บไซต์ MAC-5 ในครั้งนี้ เราเน้นการดึงสีที่ใช่ของ MAC-5 ออกมา พร้อมการเพิ่มลูกเล่นและเสน่ห์ ทำให้คนสนุกกับการเลื่อนเม้าส์เพื่อดูเว็บไซต์ทั้งหมด ส่งผลต่อคะแนนของเว็บไซต์ และส่งผลต่อการทำการตลาดออนไลน์ด้วย',
          content3: 'อย่างที่กล่าวข้างต้นว่าเว็บไซต์ MAC-5 นั้น เน้นการให้บริการที่เข้าถึงลูกค้าทุกคน ทำให้แม้กระทั่งในมือถือลูกค้าก็สามารถจองคอร์สอบรมออนไลน์ได้ทันที และทันใจ พร้อมใช้งานฟังก์ชั่นอื่นๆ ทั้งการให้คำปรึกษา และการพูดคุยออนไลน์ได้อย่างรวดเร็วอีกเช่นกัน เพิ่มประสิทธิภาพในการมีเว็บไซต์มากขึ้นได้อย่างที่ฮ็อบบิซตั้งใจไว้ ว่าเว็บไซต์บริษัทนั้นแสดงถึงวัฒนธรรมองค์กรณ์ และการมีเว็บไซต์ที่ดีนั้นเพิ่มมูลค่าให้กับแบรนด์อย่างแท้จริง',
          imageInfo: {
            client: 'Mac-5',
            service: 'เว็บไซต์',
            year: '2017',
          },
          logoPath: '/assets/images/Work/workDetail/mac.png'
        },
        en: {
          mainHeader: 'Content heavy website doesn’t need to be boring.',
          subHeader1: 'A beautiful website equipped with the tools that save you more sleeps',
          subHeader2: 'Forget stereotype, We make a groundbreaking design that impresses everyone.',
          subHeader3: 'Work smoothly on mobile too',
          content1: 'MAC-5 Enterprise is a renowned accounting ERP software for account and inventory management, which has the best analytical features tailored to specific industries such as Production, Manufacturing, and Trading. Showcasing large amount of content requires well planning and a structured layout which becomes one of the challenges for our team; hence, making sure that every content becomes visible to the relevant user while looking refreshing and attractive is a must for us. Apart from beautifying the appearance, it has to works as a platform to gather necessary information from the potential customers by integrating with third parties apps doing things such as Email Marketing, Customer Relationship Management (CRM) and Visitor Tracking. <b>This results in a well structured website that does more than having a pretty face. Our clients can use the collected data for future business development or marketing purpose with ease. How nice.</b>',
          content2: 'If you look at a typical website for accounting software in Thailand, many of them are loads with blocks of contents hoping for someone to discover but in reality leaving the users lost somewhere in a serious-looking website instead. <b>Why don’t we offer our users with an smooth browsing experience at the very first time they enter the site?</b> We aim to make people know how awesome MAC-5 software is right away even though they have minimal knowledge on an accounting software. The website needs to communicate and embrace the brand essence rather than confuse, we strongly believe.',
          content3: '<br>Why say design for everyone if still neglecting users on small devices?</br> Mac-5 website takes care every move on mobile, including viewing features by modules or booking a webinar class. The website is not only adaptive, but responsive to different screen sizes. Users can still do everything just like they browse on Desktop computer. No need to shift between browsers. No magnifying glass either.',
          imageInfo: {
            client: 'MAC-5 Enterprise',
            service: 'Web Development<br/>Corporate<br/>Modern',
            year: '2017',
          },
          logoPath: '/assets/images/Work/workDetail/mac.png'
        },
      },
      asap: {
        th: {
          mainHeader: 'เอแซป',
          subHeader1: 'เว็บไซต์ของซอฟต์แวร์ ERP ที่เนื้อหาเยอะ จะจัดการอย่างไร?',
          subHeader2: 'ดีไซน์ที่สวยงาม ทำให้ผู้ใช้งานรู้สึกแปลกตา และประทับใจ',
          subHeader3: 'ในมือถือก็ใช้งานได้อย่างสวยงามราบรื่น',
          content1: 'เว็บไซต์ที่มีเนื้อหาค่อนข้างเยอะ และต้องการสื่อสารกับลูกค้าให้ครบถ้วน พร้อมการบริการออนไลน์ในการให้คำปรึกษาเกี่ยวกับซอฟต์แวร์ที่เข้าถึงลูกค้าได้ ทำให้เราชาวฮ็อบบิซต้องค้นหาตัวช่วยที่จะทำให้เว็บไซต์สามารถทำงานได้ในทุกส่วน หรือง่ายๆคือการค้นหา Plug-in ที่เหมาะสมในการใช้งาน เพื่อทุ่นแรงของลูกค้าในการทำงาน การจัดการเนื้อหาก็เช่นกัน เราเน้นการจัดหมวดหมู่ของเนื้อหา (Grouping) โดยดูถึงการใช้งาน และพฤติกรรมการใช้งานของลูกค้าเป็นหลัก เช่น เมนูแบบไหนที่คนนิยมกดเข้าเพื่อดูรายละเอียด หรือปุ่มแบบไหนที่ดึงดูดให้คนกดเพื่อเข้าอ่านข้อมูลมากที่สุด',
          content2: 'ปกติแล้วรูปแบบการดีไซน์เว็บไซต์ของโปรแกรมซอฟต์แวร์มักจะออกมาดูจริงจัง เป็นทางการ และเต็มไปด้วยเนื้อหา ทำให้ลูกค้าส่วนใหญ่(มักจะ)ไม่กดอ่าน และเข้ามาเพื่อมองหาแต่สิ่งที่ตนเองต้องการและจากไป เช่น ราคา หรือ ฟังก์ชั่นหลักของซอฟท์แวร์ โดยไม่ได้รู้สึกจดจำเกี่ยวกับเว็บไซต์สักเท่าไหร่นัก ฮ็อบบิซเน้นความสำคัญในการทำให้เว็บไซต์น่าใช้งาน และติดตาลูกค้าแม้ออกจากเว็บไซต์ไปแล้ว โดยการทำเว็บไซต์ MAC-5 ในครั้งนี้ เราเน้นการดึงสีที่ใช่ของ MAC-5 ออกมา พร้อมการเพิ่มลูกเล่นและเสน่ห์ ทำให้คนสนุกกับการเลื่อนเม้าส์เพื่อดูเว็บไซต์ทั้งหมด ส่งผลต่อคะแนนของเว็บไซต์ และส่งผลต่อการทำการตลาดออนไลน์ด้วย',
          content3: 'อย่างที่กล่าวข้างต้นว่าเว็บไซต์ MAC-5 นั้น เน้นการให้บริการที่เข้าถึงลูกค้าทุกคน ทำให้แม้กระทั่งในมือถือลูกค้าก็สามารถจองคอร์สอบรมออนไลน์ได้ทันที และทันใจ พร้อมใช้งานฟังก์ชั่นอื่นๆ ทั้งการให้คำปรึกษา และการพูดคุยออนไลน์ได้อย่างรวดเร็วอีกเช่นกัน เพิ่มประสิทธิภาพในการมีเว็บไซต์มากขึ้นได้อย่างที่ฮ็อบบิซตั้งใจไว้ ว่าเว็บไซต์บริษัทนั้นแสดงถึงวัฒนธรรมองค์กรณ์ และการมีเว็บไซต์ที่ดีนั้นเพิ่มมูลค่าให้กับแบรนด์อย่างแท้จริง',
          imageInfo: {
            client: 'Mac-5',
            service: 'เว็บไซต์',
            year: '2017',
          },
          logoPath: 'mac.png'
        },
        en: {
          mainHeader: 'asap',
          subHeader1: 'เว็บไซต์ของซอฟต์แวร์ ERP ที่เนื้อหาเยอะ จะจัดการอย่างไร?',
          subHeader2: 'ดีไซน์ที่สวยงาม ทำให้ผู้ใช้งานรู้สึกแปลกตา และประทับใจ',
          subHeader3: 'ในมือถือก็ใช้งานได้อย่างสวยงามราบรื่น',
          content1: 'เว็บไซต์ที่มีเนื้อหาค่อนข้างเยอะ และต้องการสื่อสารกับลูกค้าให้ครบถ้วน พร้อมการบริการออนไลน์ในการให้คำปรึกษาเกี่ยวกับซอฟต์แวร์ที่เข้าถึงลูกค้าได้ ทำให้เราชาวฮ็อบบิซต้องค้นหาตัวช่วยที่จะทำให้เว็บไซต์สามารถทำงานได้ในทุกส่วน หรือง่ายๆคือการค้นหา Plug-in ที่เหมาะสมในการใช้งาน เพื่อทุ่นแรงของลูกค้าในการทำงาน การจัดการเนื้อหาก็เช่นกัน เราเน้นการจัดหมวดหมู่ของเนื้อหา (Grouping) โดยดูถึงการใช้งาน และพฤติกรรมการใช้งานของลูกค้าเป็นหลัก เช่น เมนูแบบไหนที่คนนิยมกดเข้าเพื่อดูรายละเอียด หรือปุ่มแบบไหนที่ดึงดูดให้คนกดเพื่อเข้าอ่านข้อมูลมากที่สุด',
          content2: 'ปกติแล้วรูปแบบการดีไซน์เว็บไซต์ของโปรแกรมซอฟต์แวร์มักจะออกมาดูจริงจัง เป็นทางการ และเต็มไปด้วยเนื้อหา ทำให้ลูกค้าส่วนใหญ่(มักจะ)ไม่กดอ่าน และเข้ามาเพื่อมองหาแต่สิ่งที่ตนเองต้องการและจากไป เช่น ราคา หรือ ฟังก์ชั่นหลักของซอฟท์แวร์ โดยไม่ได้รู้สึกจดจำเกี่ยวกับเว็บไซต์สักเท่าไหร่นัก ฮ็อบบิซเน้นความสำคัญในการทำให้เว็บไซต์น่าใช้งาน และติดตาลูกค้าแม้ออกจากเว็บไซต์ไปแล้ว โดยการทำเว็บไซต์ MAC-5 ในครั้งนี้ เราเน้นการดึงสีที่ใช่ของ MAC-5 ออกมา พร้อมการเพิ่มลูกเล่นและเสน่ห์ ทำให้คนสนุกกับการเลื่อนเม้าส์เพื่อดูเว็บไซต์ทั้งหมด ส่งผลต่อคะแนนของเว็บไซต์ และส่งผลต่อการทำการตลาดออนไลน์ด้วย',
          content3: 'อย่างที่กล่าวข้างต้นว่าเว็บไซต์ MAC-5 นั้น เน้นการให้บริการที่เข้าถึงลูกค้าทุกคน ทำให้แม้กระทั่งในมือถือลูกค้าก็สามารถจองคอร์สอบรมออนไลน์ได้ทันที และทันใจ พร้อมใช้งานฟังก์ชั่นอื่นๆ ทั้งการให้คำปรึกษา และการพูดคุยออนไลน์ได้อย่างรวดเร็วอีกเช่นกัน เพิ่มประสิทธิภาพในการมีเว็บไซต์มากขึ้นได้อย่างที่ฮ็อบบิซตั้งใจไว้ ว่าเว็บไซต์บริษัทนั้นแสดงถึงวัฒนธรรมองค์กรณ์ และการมีเว็บไซต์ที่ดีนั้นเพิ่มมูลค่าให้กับแบรนด์อย่างแท้จริง',
          imageInfo: {
            client: 'Mac-5',
            service: 'เว็บไซต์',
            year: '2017',
          },
          logoPath: 'mac.png'
        },
      }
    }

    this.setState({ 
      contentLoaded: tempContent[id][lang],
    }) 
  }

  render() {
    const { lang } = this.props;
    const { contentLoaded } = this.state;

    return (
      <WorkDetailComponent lang={lang} contentLoaded={contentLoaded} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('ourWorks/WorkDetail')
);

export default enhance(WorkDetail);

