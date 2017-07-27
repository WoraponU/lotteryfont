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
        webScreenShot: {
          path: '',
          client: '',
          service: '',
          year: '',
        },            
        logo: {
          path: '',              
        },            
      }, 
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
            webScreenShot: {
              path: 'Mac-5.png',
              client: 'MAC-5 Enterprise',
              service: 'Web Development<br/>Corporate<br/>Modern',
              year: '2017',
            },            
            logo: {
              path: 'mac.png',              
            },            
          },  
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
            webScreenShot: {
              path: 'Mac-5.png',
              client: 'MAC-5 Enterprise',
              service: 'Web Development<br/>Corporate<br/>Modern',
              year: '2017',
            },            
            logo: {
              path: 'mac.png',              
            },            
          },  
        },
      },
      asap: {
        th: {
          mainHeader: 'เว็บไซต์ที่ทันสมัย แปลกใหม่ และดึงดูดผู้ใช้งาน',
          subHeader1: 'เว็บไซต์ทันสมัย ที่ต้องสื่อสารกับลูกค้าให้ได้ใน 3 วิ',
          subHeader2: 'ลูกเล่นที่ดึงดูดให้ผู้ใช้อยู่ในเว็บไซต์นานยิ่งขึ้น',
          subHeader3: 'เว็บไซต์ที่เน้นการเขียนบล็อก และการให้ความรู้ มาพร้อมการใช้งานหลังบ้านที่ง่ายดาย',
          content1: 'หากเป็นเว็บไซต์ทั่วไป ส่วนใหญ่แล้วมักจะเป็นการขายสินค้า หรือการแนะนำบริษัท ซึ่งในทางดีไซน์เราถือว่าเป็นการมีสินค้าที่ช่วยในการกำหนด Mood & Tone ของเว็บไซต์ได้ แต่โจทย์ที่น่าสนใจในการทำเว็บไซต์ ASAP PROJECT คือการที่เราต้องสื่อให้ลูกค้าเข้าใจว่าเราทำอะไรภายใน 3 วินาทีที่เข้ามาเว็บไซต์ โดยลูกค้าต้องรู้ว่าเราเป็นใคร ทำอะไร ที่ไหน อย่างไร แล้วเขาสามารถใช้บริการ หรือได้ประโยชน์อย่างไรจากเราได้บ้าง ทำให้ฮ็อบบิซต้องแก้ไข Landing Page กันหลายครั้งเพื่อการแสดงคำอธิบายเกี่ยวกับทีม ASAP PROJECT ไว้ใน 1 Landing Page ท้าทายทีมฮ็อบบิซได้เป็นอย่างดี',
          content2: 'การที่ลูกค้าอยู่ในเว็บไซต์นานขึ้น ทำให้คะแนนของเว็บไซต์ดีขึ้น โอกาสติดการค้นหาใน Google มากขึ้น และทำให้การทำ SEO ง่ายขึ้น เพราะฉะนั้นการมีลูกเล่นที่ทำให้ลูกค้าอยู่ในเว็บไซต์นานขึ้นก็เป็นสิ่งที่สำคัญที่ฮ็อบบิซคำนึงถึงเป็นอันดับแรกๆ ในการทำโปรเจ็คต์นี้เราใช้การสื่อความเร็วของ ASAP PROJECT เป็นเครื่องบินกระดาษ แต่หากเป็นเครื่องบินกระดาษทั่วไปก็คงจะไม่เร็วพอ เราจึงแสดงคลื่นความเร็วออกมาในรูปแบบต่างๆ เพื่อเป็นการเน้นย้ำถึงการทำงานของ ASAP PROJECT ที่ให้คำปรึกษาได้อย่างรวดเร็วทันใจ ทันการใช้งาน อีกทั้งสีเหลืองและสีน้ำเงินก็แสดงถึงการเคลื่อนไหว และการทำงานอย่างเป็นระบบได้อย่างดี',
          content3: 'นอกจากการคำนึงถึงหน้าบ้านที่สวยงาม หลังบ้านที่ใช้งานง่ายก็สำคัญเช่นกัน หากการใช้งานหลังบ้านค่อนข้างยุ่งยาก อาจจะทำให้การสร้างเนื้อหาบนเว็บไซต์ได้ไม่ดีอย่างที่ต้องการ ดังนั้นฮ็อบบิซจึงทำหลังบ้านให้ลูกค้าใช้งานได้ง่ายที่สุด และมีหน้าตาที่สะอาดตาอยู่เสมอ กับเว็บไซต์ ASAP PROJECT ก็เช่นกัน เราเลือกหน้าตาที่ง่ายต่อการอัพเดทหลังบ้าน และด้วยการเป็นผู้เชี่ยวชาญเกี่ยวกับแอพพลิเคชั่น และปลั๊กอินต่างๆ ทำให้อาจะมีการเล่นและลองปลั๊กอินบนเว็บไซต์ได้อยู่เสมอ การทำหลังบ้านที่ซัพพอร์ตเรื่องนี้ก็เป็นอีกสิ่งหนึ่งที่สำคัญ',
          imageInfo: {
            webScreenShot: {
              path: 'Mac-5.png',
              client: 'ASAP<br/>PROJECT',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'mac.png',              
            },            
          },    
        },
        en: {
          mainHeader: 'เว็บไซต์ที่ทันสมัย แปลกใหม่ และดึงดูดผู้ใช้งาน',
          subHeader1: 'เว็บไซต์ทันสมัย ที่ต้องสื่อสารกับลูกค้าให้ได้ใน 3 วิ',
          subHeader2: 'ลูกเล่นที่ดึงดูดให้ผู้ใช้อยู่ในเว็บไซต์นานยิ่งขึ้น',
          subHeader3: 'เว็บไซต์ที่เน้นการเขียนบล็อก และการให้ความรู้ มาพร้อมการใช้งานหลังบ้านที่ง่ายดาย',
          content1: 'หากเป็นเว็บไซต์ทั่วไป ส่วนใหญ่แล้วมักจะเป็นการขายสินค้า หรือการแนะนำบริษัท ซึ่งในทางดีไซน์เราถือว่าเป็นการมีสินค้าที่ช่วยในการกำหนด Mood & Tone ของเว็บไซต์ได้ แต่โจทย์ที่น่าสนใจในการทำเว็บไซต์ ASAP PROJECT คือการที่เราต้องสื่อให้ลูกค้าเข้าใจว่าเราทำอะไรภายใน 3 วินาทีที่เข้ามาเว็บไซต์ โดยลูกค้าต้องรู้ว่าเราเป็นใคร ทำอะไร ที่ไหน อย่างไร แล้วเขาสามารถใช้บริการ หรือได้ประโยชน์อย่างไรจากเราได้บ้าง ทำให้ฮ็อบบิซต้องแก้ไข Landing Page กันหลายครั้งเพื่อการแสดงคำอธิบายเกี่ยวกับทีม ASAP PROJECT ไว้ใน 1 Landing Page ท้าทายทีมฮ็อบบิซได้เป็นอย่างดี',
          content2: 'การที่ลูกค้าอยู่ในเว็บไซต์นานขึ้น ทำให้คะแนนของเว็บไซต์ดีขึ้น โอกาสติดการค้นหาใน Google มากขึ้น และทำให้การทำ SEO ง่ายขึ้น เพราะฉะนั้นการมีลูกเล่นที่ทำให้ลูกค้าอยู่ในเว็บไซต์นานขึ้นก็เป็นสิ่งที่สำคัญที่ฮ็อบบิซคำนึงถึงเป็นอันดับแรกๆ ในการทำโปรเจ็คต์นี้เราใช้การสื่อความเร็วของ ASAP PROJECT เป็นเครื่องบินกระดาษ แต่หากเป็นเครื่องบินกระดาษทั่วไปก็คงจะไม่เร็วพอ เราจึงแสดงคลื่นความเร็วออกมาในรูปแบบต่างๆ เพื่อเป็นการเน้นย้ำถึงการทำงานของ ASAP PROJECT ที่ให้คำปรึกษาได้อย่างรวดเร็วทันใจ ทันการใช้งาน อีกทั้งสีเหลืองและสีน้ำเงินก็แสดงถึงการเคลื่อนไหว และการทำงานอย่างเป็นระบบได้อย่างดี',
          content3: 'นอกจากการคำนึงถึงหน้าบ้านที่สวยงาม หลังบ้านที่ใช้งานง่ายก็สำคัญเช่นกัน หากการใช้งานหลังบ้านค่อนข้างยุ่งยาก อาจจะทำให้การสร้างเนื้อหาบนเว็บไซต์ได้ไม่ดีอย่างที่ต้องการ ดังนั้นฮ็อบบิซจึงทำหลังบ้านให้ลูกค้าใช้งานได้ง่ายที่สุด และมีหน้าตาที่สะอาดตาอยู่เสมอ กับเว็บไซต์ ASAP PROJECT ก็เช่นกัน เราเลือกหน้าตาที่ง่ายต่อการอัพเดทหลังบ้าน และด้วยการเป็นผู้เชี่ยวชาญเกี่ยวกับแอพพลิเคชั่น และปลั๊กอินต่างๆ ทำให้อาจะมีการเล่นและลองปลั๊กอินบนเว็บไซต์ได้อยู่เสมอ การทำหลังบ้านที่ซัพพอร์ตเรื่องนี้ก็เป็นอีกสิ่งหนึ่งที่สำคัญ',
          imageInfo: {
            webScreenShot: {
              path: 'Mac-5.png',
              client: 'ASAP<br/>PROJECT',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'mac.png',              
            },            
          },       
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

