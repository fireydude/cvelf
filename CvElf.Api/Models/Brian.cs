public static class Brian
{
    public static CV GetCV()
    {
        return new CV("Brian Herbert",
            new Summary(new SummaryItem[]
            {
                new("Home Location", "Lymm, Cheshire"),
                new("Telephone (mobile)", "+44 7780602687"),
                new("Email Address", "briansidneryherbert@gmail.com"),
                new("LinkedIn Profile", "http://uk/linkedin.com/in/certaintysoftware"),
                new("Availability", "Immediately"),
                new("Preferred Role", "Software Development Contractor (.NET)"),
            },
            "An experienced .NET Software Developer with 20 years experience.  Brian recently worked for the Army but has also worked for start-up companies in FinTech and Ecommerce."),
            new Skills(
                Excellent: new[] {
                        ".NET 8 (Core)",
                        "Agile (Scrum)",
                        "React",
                        "ASP .NET Web API (REST)",
                        "Azure (6 yrs)",
                        "C# (20 yrs)",
                        "Git",
                        "Typescript"
                    },
                Good: new[] {
                    "Azure DevOps",
                    "Docker", "CSS 3",
                    "HTML 5",
                    "TDD",
                    "ASP .NET MVC 5",
                    "Entity Framework",
                    "SQL Server",
                    "JWT",
                    "SVG"
                },
                Average: new[] {
                    "IdentityServer4",
                    "Dynamics365", "IIS",
                    "NPoco",
                    "mobx (React)"
                }
            ),
            new WorkExperience[] {
                new WorkExperience(
                    "Ministry of Defence Army Digital Services Contract",
                    "Monitor IS Enterprise Technologists",
                    "\tAndover (remote)",
                    new DateTime(1, 6, 2021),
                    new DateTime(1, 5, 2024),
                    "Brian helped to build systems for managing Army training. This internal business system was built with React, docker, .NET 8 and SQL Server.  It was hosted on secure internal Army Azure DevOps."
                ),
                new WorkExperience(
                    "Ministry of Defence Army Digital Services Contract",
                    "Monitor IS Enterprise Technologists",
                    "\tAndover (remote)",
                    new DateTime(1, 6, 2021), //"\t\tJun 2021 - May 2024",
                    new DateTime(1, 6, 2021), //"\t\tJun 2021 - May 2024",
                    "Brian helped to build systems for managing Army training. This internal business system was built with React, docker, .NET 8 and SQL Server.  It was hosted on secure internal Army Azure DevOps."
                ),
                new WorkExperience(
                    "Engineering UK Competition Contract",
                    "Etch Group",
                    "\t\t\t\tSouthampton (remote)",
                    new DateTime(1, 6, 2021), //"\t\tMar 2021 – May 2021",
                    new DateTime(1, 6, 2021), //"\t\tMar 2021 – May 2021",
                    "Brian helped to build a web application from the ground up for the Big Bang Competition. This allowed competition entrants to enter the details for their projects so that they could be judged. The website authorised various user profiles with different activities such as judging, moderation, administration etc. There were also different competitions and prizes."
                ),
                new WorkExperience(
                    "Web Development Contractor",
                    "Metrobank",
                    "London (remote)",
                    new DateTime(1, 6, 2021), //Nov 2020 - Feb 2021",
                    new DateTime(1, 6, 2021), //Nov 2020 - Feb 2021",
                    "Brian worked on the Online Account Opening form for the Saint James' Place project. This involved javascript development with BackboneJS, ASP .NET MVC and the Dynamics 365 API."
                ),
                new WorkExperience(
                    "Senior Software Engineer",
                    "Kalibrate Technologies",
                    "Manchester (remote)",
                    new DateTime(1, 6, 2021), //Mar 2020 - Aug 2020",
                    new DateTime(1, 6, 2021), //Mar 2020 - Aug 2020",
                    "Brian worked on the Continuous Integration project, migrating the build pipelines from Jenkins into Azure DevOps and supported various products. The support work included a Cordova mobile application and the flagship AngularJS product.  Brian also worked with IdentityServer4, configuring Identity Providers etc."
                ),
                new WorkExperience(
                    "Angular, .NET & Azure Contract Developer",
                    "OpenMoney (EVestor)",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Jan 2019 - Jan 2020",
                    new DateTime(1, 6, 2021), //Jan 2019 - Jan 2020",
                    "Full stack web development with Angular, Service Fabric and C# .NET.  Brian worked to deliver the quick check customer portal and developed various areas of the website.  He also worked extensively to deliver cloud services which were implemented with .NET core Function Apps and Service Fabric's actor pattern.  These services were deployed through Microsoft DevOps, using continuous integration builds, and Octopus deploy was used to manage environments.  Terraform was used by the platform engineers to create the environments."
                ),
                new WorkExperience(
                    "Technical Lead",
                    "Sabs Travel Technologies",
                    "Hale, Cheshire",
                    new DateTime(1, 6, 2021), //Apr 2018 - Nov 2018",
                    new DateTime(1, 6, 2021), //Apr 2018 - Nov 2018",
                    "Full stack web development working with Azure and .NET.  This involved using Azure Service Fabric, Azure SQL, App Services & various other Azure products.  A website was developed in React.  Brian worked as a member for a globally distributed team, working on the European features of a global system including managing stakeholders.  Brian was also responsible for recruiting a contractor for a short-fixed price project."
                ),
                new WorkExperience(
                    "NodeJS Contractor",
                    "Blockpool",
                    "Fully Remote",
                    new DateTime(1, 6, 2021), //Mar 2018",
                    new DateTime(1, 6, 2021), //Mar 2018",
                    "Backend developer using NodeJS and MongoDB"
                ),
                new WorkExperience(
                    "Senior Software Developer",
                    "Auden",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Sep 2017 - Mar 2018",
                    new DateTime(1, 6, 2021), //Sep 2017 - Mar 2018",
                    "Backend developer using C#, ASP .NET & Azure.  Brian worked on a backend financial system for funding loans.  He also worked on a reporting system for loan repayment schedules.  This involved learning about new Azure products such as API Gateways and Function Apps.  Programming was done with C# .NET core 2.0 and .NET Framework."
                ),
                new WorkExperience(
                    "Senior Software Developer",
                    "webuyanycar.com",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Oct 2015 - Sep 2017",
                    new DateTime(1, 6, 2021), //Oct 2015 - Sep 2017",
                    "Worked on a dedicated appointment scheduling system for buying cars and allocating vehicle purchasers to various sites nationwide.  Brian also worked on various systems using Angular, SQL Server and REST microservices with .NET Web API.  Brian automated deployments with Octopus Deploy, git and TFS Build.  His last project was to create the webuyanycar mobile app using Xamarin with extensive unit testing in the back-end."
                ),
                new WorkExperience(
                    "ASP .NET MVC Contract Developer",
                    "MD Insurance Services",
                    "Birkenhead, Merseyside",
                    new DateTime(1, 6, 2021), //May 2015 - Aug 2015",
                    new DateTime(1, 6, 2021), //May 2015 - Aug 2015",
                    "MDIS provides insurance services for the building industry.  Brian was involved with completing an extranet website which linked to a CRM (Sapiens).  This was done with ASP .NET MVC, the identity framework membership provider for authentication, EF6 and JavaScript libraries including jQuery."
                ),
                new WorkExperience(
                    "ASP .NET MVC (Orchard CMS) Contract Developer",
                    "NICE",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Oct 2014 - Mar 2015",
                    new DateTime(1, 6, 2021), //Oct 2014 - Mar 2015",
                    "The National Institute for Health and Care Excellence (NICE) provides guidance for the NHS.  Brian's role was to improve the nice.org.uk website, an MVC based Content Management System (Orchard CMS). He customised a sitemap module, created a module to migrate data from an existing system into Orchard CMS and fixed a number of bugs in the code."
                ),
                new WorkExperience(
                    ".NET Contract Developer",
                    "Nitecrest",
                    "Leyland, Lancashire",
                    new DateTime(1, 6, 2021), //Aug 2014 - Oct 2014",
                    new DateTime(1, 6, 2021), //Aug 2014 - Oct 2014",
                    "Nitecrest is a multinational company which is the largest manufacturer of plastic cards and similar products.  Brian’s role was to trouble-shoot various back-end systems for handling input files and processing them into data files for the manufacturing process. This involved working a number of technologies which included ASP .NET MVC, C#, MSSQL and Entity Framework 6."
                ),
                new WorkExperience(
                    "ASP .NET Webforms SQL Server Contract Developer",
                    "Unicom",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Jun 2014 - Aug 2014",
                    new DateTime(1, 6, 2021), //Jun 2014 - Aug 2014",
                    "Brian added various new pages to Unicom’s ASP .NET webforms CRM system and altered a number of customer-facing MVC pages.  This system monitored and reported on staff absence, customer data and provided a public facing site."
                ),
                new WorkExperience(
                    "Freelance Android Developer",
                    "Promtek",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Feb 2014 - May 2014",
                    new DateTime(1, 6, 2021), //Feb 2014 - May 2014",
                    "Promtek provides process control systems and weigher calibration systems for the animal feed market and food manufacturing processes.  Brian created a system for managing Service Engineer workloads and calibration certificates; an Android application and a back-office admin portal were connected with Google Cloud Messaging.  The admin portal was able to queue jobs for the Android application and the job outcomes would be uploaded and displayed in the admin portal.  The backend system was an ASP .NET Web API with a SQL Azure Database, hosted in Azure."
                ),
                new WorkExperience(
                    "Freelance ASP .NET Developer",
                    "Jaguar Land Rover",
                    "Manchester, Lancashire",
                    new DateTime(1, 6, 2021), //Jun 2013 - Oct 2013",
                    new DateTime(1, 6, 2021), //Jun 2013 - Oct 2013",
                    "An interactive forms website was produced for consumption by the network of Jaguar and Land Rover dealerships around the world.  It supported 13 languages including non-Latin texts and produced a downloadable PDF document.  This website was managed by Brian until JLR moved to an in-house equivalent."
                ),
                new WorkExperience(
                    "ASP .NET Webforms Contract Developer",
                    "WebNET",
                    "Altrincham, Cheshire",
                    new DateTime(1, 6, 2021), //Aug 2013 - Sep 2013",
                    new DateTime(1, 6, 2021), //Aug 2013 - Sep 2013",
                    "WebNET provides document management solutions for a number of electricity providers. Brian was brought in to fix a number of bugs for a particular client so that the system could be delivered to a tight schedule."
                ),
                new WorkExperience(
                    "C# .NET Contract Developer",
                    "Matrix Telematics",
                    "Altrincham, Cheshire",
                    new DateTime(1, 6, 2021), //Feb 2013 - Mar 2013",
                    new DateTime(1, 6, 2021), //Feb 2013 - Mar 2013",
                    "Backend Windows Services with C# .NET 4 and MySQL databases.  Brian was involved with optimising a real-time alerts system for sending out notifications when a vehicle moves into a specific area on the map."
                ),
                new WorkExperience(
                    "ASP .NET Webforms Contract Developer",
                    "Manheim",
                    "Poynton, Cheshire",
                    new DateTime(1, 6, 2021), //Aug 2012 - Feb 2013",
                    new DateTime(1, 6, 2021), //Aug 2012 - Feb 2013",
                    "This project was based around a Service Oriented Architecture and a number of design patterns, involving ASP .NET, MVC and multi-tier architecture.  Brian used a CQRS design pattern to implement a message queue for sending SMS messages via third party providers.  He also debugged various web pages and added user controls."
                ),
                new WorkExperience(
                    "ASP .NET MVC 3 Contract Developer",
                    "Daniel Contractors",
                    "Stockton Heath, Cheshire",
                    new DateTime(1, 6, 2021), //Jan 2012 - Jul 2012",
                    new DateTime(1, 6, 2021), //Jan 2012 - Jul 2012",
                    "This contract involved programming with ASP .NET 3.5 and Entity Framework 3. The main responsibility was to create a website using MVC that would provide the User Interface for an existing customer database. Integration testing was implemented using Selenium. Other responsibilities included Winforms development work with Unity for IoC, xUnity for TDD and agile methodologies."
                ),
                new WorkExperience(
                    "ASP .NET MVC 3 Contract Developer",
                    "AI Claims",
                    "Blackpool, Lancashire",
                    new DateTime(1, 6, 2021), //Nov 2011 - Dec 2011",
                    new DateTime(1, 6, 2021), //Nov 2011 - Dec 2011",
                    "This contract involved programming with ASP .NET 4.0.  Initially customising an existing MVC 2 website and then moving onto separate MVC 3 websites, this contract also involved experience with the Entity Framework and NUnit."
                ),
                new WorkExperience(
                    "Programmer Analyst",
                    "HSS",
                    "Urmston, Lancashire",
                    new DateTime(1, 6, 2021), //Feb 2011 - Aug 2011",
                    new DateTime(1, 6, 2021), //Feb 2011 - Aug 2011",
                    "As a Senior Developer at HSS Tool Hire Brian's duties included business analysis as well as programming. Test Driven Development was used for creating Windows Services and various intranet sites were implemented using C# ASP .NET programming with SQL Server and Oracle back-ends. This involved extensive database work with Castle Active Record (NHibernate)."
                ),
                new WorkExperience(
                    "C# ASP .NET Contract Developer",
                    "Celestica",
                    "Greenock, Renfrewshire",
                    new DateTime(1, 6, 2021), //Dec 2010 - Jan 2011",
                    new DateTime(1, 6, 2021), //Dec 2010 - Jan 2011",
                    "7 weeks C# ASP .NET programming with SQL Server 2003, TFS and Visual Studio 2008.  Essentially this project was involved with updating a classic ASP website to work with Webforms for the multi-national reverse logistics company.  The project followed Scrum practices, with a proper scrum master."
                ),
                new WorkExperience(
                    ".NET Contract Software Engineer",
                    "BAE Systems",
                    "Warton, Lancashire",
                    new DateTime(1, 6, 2021), //Jan 2010 - Jun 2010",
                    new DateTime(1, 6, 2021), //Jan 2010 - Jun 2010",
                    "Initially a 3 month contract at Warton, Lancashire it was extended to 5 months with overtime: Programming for the Aerospace industry in C# 3.5 using SQL, WCF and XML serialisation.  Brian worked on a modular application for managing file transfers across secure networks which allowed the Design Engineers to deploy  files for testing and manufacturing of aircraft parts."
                ),
                new WorkExperience(
                    "Analyst Programmer",
                    "Andrews Online",
                    "Keynsham, Somerset",
                    new DateTime(1, 6, 2021), //Oct 2009 - Nov 2009",
                    new DateTime(1, 6, 2021), //Oct 2009 - Nov 2009",
                    "Andrews is a Real Estate and Property Management company with headquarters in Keynsham.  Brian worked on backend systems for connecting to Dynamics CRM & sending email newsletters."
                ),
                new WorkExperience(
                    "Programmer",
                    "IPL Plc",
                    "Bath, Somerset",
                    new DateTime(1, 6, 2021), //May 2006 - Jul 2009",
                    new DateTime(1, 6, 2021), //May 2006 - Jul 2009",
                    "Brian was involved with all aspects of developing and maintaining an internal staff database and accounting application for this software house.  This was done in C# 2.0, MS SQL, winforms and ASP .NET webforms.  Brian also worked as part of a team of developers on various projects for Nationwide Building Society."
                ),
                new WorkExperience(
                    "Engineering Graduate",
                    "Renishaw Plc",
                    "Wotton-under-Edge, Gloucestershire",
                    new DateTime(1, 6, 2021), // "May 2004 - May 2006",
                    new DateTime(1, 6, 2021), // "May 2004 - May 2006",
                    "Working in a culture of innovation Renishaw provided solid engineering experience. Brian worked in Electronic Production Engineering where he programmed an optical inspection machine using a drag & drop interface (Agilent SJ50).  Later, in the Software Engineering Department Brian developed software with C# WinForms, SQL Server and Object Oriented methodologies Engineering."
                )
            },
            new[] {
                new EducationTraining("Loughborough University", "Master of Engineering (MEng) Electronic and Computer Systems Engineering", 2004, new[] {
                    "Programming and Software Design with C++",
                    "Mathematics * Digital Systems",
                    "Control Systems",
                    "Signals and Systems",
                    "Project Management and Finance"
                }),
                new EducationTraining("Arnold School", null, 1999, new[] {
                    "A-Levels: Mathematics B, Physics B, Chemistry D",
                    "Ten GCSE's: One A*, three A's, four B's and two C's. This includes Mathematics - A, Physics - B and English Language - C",
                })
            }
        );
    }

}