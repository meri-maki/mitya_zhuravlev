import React, { useState, useEffect, useRef } from "react"
import "./index.css"

import Lm from "~/shared/assets/LM/Lm.png"
const caseStudies = {
	"lemana-pro": {
		title: "Лемана ПРО",
		subtitle: "Комплексная система управления проектами для архитектурных и строительных компаний",
		image: "https://pplx-res.cloudinary.com/image/upload/v1748557868/pplx_project_search_images/d273b65ff26364fbb0ef91776d1d9f4be3c69ecd.jpg ",
		sections: [
			{
				title: "Проблема",
				content:
					"Архитектурные и строительные компании испытывали трудности с координацией проектов, отслеживанием прогресса и управлением документооборотом. Существующие решения были либо слишком сложными, либо не покрывали все потребности отрасли.",
			},
			{
				title: "Решение",
				content:
					"Была разработана комплексная система, объединяющая управление проектами, документооборот, планирование ресурсов и коммуникации в едином интерфейсе. Система учитывает специфику строительной отрасли и интегрируется с популярными CAD-системами.",
			},
			{
				title: "Результат",
				content:
					"Внедрение системы позволило сократить время на координацию проектов на 40%, уменьшить количество ошибок в документообороте на 60% и повысить общую эффективность команд на 25%.",
			},
		],
	},
	"pcsla-polekab": {
		title: "ПСЛА с ПолеКАБ",
		subtitle: "Мобильное приложение для управления инженерными коммуникациями и кабельными системами",
		image: "https://pplx-res.cloudinary.com/image/upload/v1748606076/pplx_project_search_images/bc7543714af4513614388b92ed3fea68eeeeef6e.jpg ",
		sections: [
			{
				title: "Проблема",
				content:
					"Инженеры и техники испытывали сложности с мониторингом и обслуживанием кабельных систем, особенно в полевых условиях. Отсутствовала централизованная система для отслеживания состояния оборудования.",
			},
			{
				title: "Решение",
				content:
					"Разработано мобильное приложение с интуитивным интерфейсом для мониторинга кабельных систем, создания отчетов и планирования обслуживания. Включена система уведомлений и интеграция с IoT-датчиками.",
			},
			{
				title: "Результат",
				content: "Приложение сократило время на диагностику на 50%, повысило качество обслуживания и снизило количество аварийных ситуаций на 30%.",
			},
		],
	},
	"publics-garage": {
		title: "Publics Garage",
		subtitle: "Платформа для создания и управления цифровыми активами с современным интерфейсом",
		image: "https://pplx-res.cloudinary.com/image/upload/v1748932695/pplx_project_search_images/2ff4031591d4ee11ef3feccd095d93b465d278fe.jpg ",
		sections: [
			{
				title: "Проблема",
				content:
					"Пользователи сталкивались со сложностями при работе с цифровыми активами из-за запутанных интерфейсов и отсутствия единой платформы для управления различными типами активов.",
			},
			{
				title: "Решение",
				content:
					"Создана унифицированная платформа с чистым, интуитивным дизайном, позволяющая легко создавать, управлять и монетизировать цифровые активы. Реализована система автоматизации рабочих процессов.",
			},
			{
				title: "Результат",
				content: "Платформа привлекла более 10,000 активных пользователей за первые 6 месяцев, показав высокий уровень удовлетворенности пользователей (NPS 8.5/10).",
			},
		],
	},
	aviakassa: {
		title: "Aviakassa",
		subtitle: "Система бронирования авиабилетов с удобным интерфейсом и быстрым поиском",
		image: "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2024/03/Portfolio-UX-Case-Study_Premiumuikits_210324_prev01.png?fit=1200%2C800&ssl=1",
		sections: [
			{
				title: "Проблема",
				content: "Существующие системы бронирования авиабилетов имели сложные интерфейсы, медленный поиск и высокий процент отказов на этапе оплаты.",
			},
			{
				title: "Решение",
				content: "Разработан новый интерфейс с упрощенным процессом поиска и бронирования, оптимизированными формами и улучшенной системой фильтрации результатов.",
			},
			{
				title: "Результат",
				content: "Конверсия увеличилась на 35%, время завершения бронирования сократилось на 45%, а удовлетворенность пользователей выросла до 4.7/5.",
			},
		],
	},
}
const App2 = () => {
	const [activeTab, setActiveTab] = useState("achievements")
	const [modalOpen, setModalOpen] = useState(false)
	const [currentCaseStudy, setCurrentCaseStudy] = useState(null)
	const [notification, setNotification] = useState(null)

	const headerRef = useRef(null)
	const navRef = useRef(null)
	const formRef = useRef(null)

	// Case Study Data

	// Scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				headerRef.current?.classList.add("scrolled")
			} else {
				headerRef.current?.classList.remove("scrolled")
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Show notification
	const showNotification = (message, type = "info") => {
		setNotification({ message, type })
		setTimeout(() => setNotification(null), 5000)
	}

	// Handle tab change
	const handleTabClick = (tabId) => {
		setActiveTab(tabId)
	}

	// Open modal
	const openModal = (projectId) => {
		setCurrentCaseStudy(caseStudies[projectId])
		setModalOpen(true)
		document.body.style.overflow = "hidden"
	}

	// Close modal
	const closeModal = () => {
		setModalOpen(false)
		document.body.style.overflow = "auto"
	}

	// Submit contact form
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(formRef.current)
		const name = formData.get("name")
		const email = formData.get("email")
		const message = formData.get("message")

		if (!name || !email || !message) {
			showNotification("Пожалуйста, заполните все поля", "error")
			return
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			showNotification("Пожалуйста, введите корректный email", "error")
			return
		}

		showNotification("Сообщение отправлено!", "success")
		formRef.current.reset()
	}

	return (
		<div className="app">
			{/* Header */}
			<header ref={headerRef} className="header" id="header">
				<div className="container">
					<div className="header__content">
						<div className="header__logo">
							<span className="logo">Дмитрий Журавлёв</span>
						</div>
						<nav ref={navRef} className="header__nav" id="nav">
							<ul className="nav__list">
								<li>
									<a href="#about" className="nav__link">
										О себе
									</a>
								</li>
								<li>
									<a href="#projects" className="nav__link">
										Проекты
									</a>
								</li>
								<li>
									<a href="#contact" className="nav__link">
										Контакты
									</a>
								</li>
							</ul>
						</nav>
						<button id="mobile-toggle" className="header__mobile-toggle" onClick={() => navRef.current.classList.toggle("active")}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div className="hero__content">
						<div className="hero__avatar">
							<img
								src=" https://i0.wp.com/freedesignresources.net/wp-content/uploads/2024/03/Portfolio-UX-Case-Study_Premiumuikits_210324_prev01.png?fit=1200%2C800&ssl=1"
								alt="Дмитрий Журавлёв"
								className="hero__image"
							/>
						</div>
						<h1 className="hero__name">Дмитрий Журавлёв</h1>
						<p className="hero__title">Старший продуктовый дизайнер в Лемана ПРО</p>
						<p className="hero__bio">
							Опытный продуктовый дизайнер с 5+ летним опытом создания пользовательских интерфейсов для цифровых продуктов. Специализируюсь на UX/UI дизайне, исследованиях пользователей
							и создании дизайн-систем.
						</p>
						<div className="hero__social">
							<a href="#" target="_blank" rel="noopener noreferrer" className="hero__social-link">
								LinkedIn
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" className="hero__social-link">
								Behance
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" className="hero__social-link">
								Dribbble
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="projects" id="projects">
				<div className="container">
					<h2 className="section__title">Проекты</h2>
					<div className="projects__grid">
						{Object.keys(caseStudies).map((key) => (
							<div key={key} className="project-card" onClick={() => openModal(key)}>
								<div className="project-card__image">
									<img src={caseStudies[key].image} alt={caseStudies[key].title} />
								</div>
								<div className="project-card__content">
									<h3 className="project-card__title">{caseStudies[key].title}</h3>
									<p className="project-card__description">{caseStudies[key].subtitle}</p>
									<div className="project-card__tags">
										<span className="tag">UX/UI Design</span>
										<span className="tag">Design System</span>
										<span className="tag">User Research</span>
									</div>
									<button className="btn btn--primary project-card__button">Посмотреть кейс</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="about" id="about">
				<div className="container">
					<h2 className="section__title">О себе</h2>
					<div className="about__tabs">
						<div className="tabs__nav">
							<button className={`tabs__button ${activeTab === "achievements" ? "active" : ""}`} onClick={() => handleTabClick("achievements")}>
								Достижения
							</button>
							<button className={`tabs__button ${activeTab === "experience" ? "active" : ""}`} onClick={() => handleTabClick("experience")}>
								Опыт
							</button>
							<button className={`tabs__button ${activeTab === "education" ? "active" : ""}`} onClick={() => handleTabClick("education")}>
								Образование
							</button>
						</div>
						<div className="tabs__content">
							<div className={`tab__panel ${activeTab === "achievements" ? "active" : ""}`}>
								<h3>Навыки</h3>
								<div className="skills__grid">
									<div className="skill__item">
										<span className="skill__name">UX/UI Design</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "95%" }} />
										</div>
									</div>
									<div className="skill__item">
										<span className="skill__name">Figma</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "90%" }} />
										</div>
									</div>
									<div className="skill__item">
										<span className="skill__name">Prototyping</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "85%" }} />
										</div>
									</div>
									<div className="skill__item">
										<span className="skill__name">User Research</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "80%" }} />
										</div>
									</div>
									<div className="skill__item">
										<span className="skill__name">Design Systems</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "90%" }} />
										</div>
									</div>
									<div className="skill__item">
										<span className="skill__name">HTML/CSS</span>
										<div className="skill__bar">
											<div className="skill__progress" style={{ width: "75%" }} />
										</div>
									</div>
								</div>
							</div>
							<div className={`tab__panel ${activeTab === "experience" ? "active" : ""}`}>
								<div className="experience__list">
									<div className="experience__item">
										<h4>Старший продуктовый дизайнер</h4>
										<p className="experience__company">Лемана ПРО</p>
										<p className="experience__period">2022 - настоящее время</p>
										<p className="experience__description">Руководство дизайном продуктов, создание дизайн-систем, проведение исследований пользователей</p>
									</div>
									<div className="experience__item">
										<h4>UX/UI Designer</h4>
										<p className="experience__company">Digital Agency</p>
										<p className="experience__period">2020 - 2022</p>
										<p className="experience__description">Проектирование интерфейсов для веб и мобильных приложений различных отраслей</p>
									</div>
								</div>
							</div>
							<div className={`tab__panel ${activeTab === "education" ? "active" : ""}`}>
								<div className="education__list">
									<div className="education__item">
										<h4>Магистр дизайна</h4>
										<p className="education__institution">Высшая школа экономики</p>
										<p className="education__period">2018 - 2020</p>
										<p className="education__description">Изучение современных методов дизайна и проектирования пользовательских интерфейсов</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="services">
				<div className="container">
					<h2 className="section__title">Услуги</h2>
					<div className="services__grid">
						<div className="service-card">
							<div className="service-card__icon">🎨</div>
							<h3 className="service-card__title">UX/UI Дизайн</h3>
							<p className="service-card__description">Создание интуитивных и красивых интерфейсов для веб и мобильных приложений</p>
						</div>
						<div className="service-card">
							<div className="service-card__icon">🔍</div>
							<h3 className="service-card__title">Исследование пользователей</h3>
							<p className="service-card__description">Глубокий анализ потребностей пользователей для создания эффективных решений</p>
						</div>
						<div className="service-card">
							<div className="service-card__icon">🛠️</div>
							<h3 className="service-card__title">Дизайн-системы</h3>
							<p className="service-card__description">Разработка масштабируемых дизайн-систем для консистентности продукта</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="contact" id="contact">
				<div className="container">
					<h2 className="section__title">Контакты</h2>
					<div className="contact__content">
						<div className="contact__info">
							<h3>Свяжитесь со мной</h3>
							<div className="contact__details">
								<p>
									<strong>Email:</strong> dmitriy@example.com
								</p>
								<p>
									<strong>Телефон:</strong> +7 (999) 123-45-67
								</p>
								<p>
									<strong>Местоположение:</strong> Москва, Россия
								</p>
							</div>
						</div>
						<form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name" className="form-label">
									Имя
								</label>
								<input type="text" id="name" name="name" className="form-control" required />
							</div>
							<div className="form-group">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input type="email" id="email" name="email" className="form-control" required />
							</div>
							<div className="form-group">
								<label htmlFor="message" className="form-label">
									Сообщение
								</label>
								<textarea id="message" name="message" className="form-control" rows="5" required />
							</div>
							<button type="submit" className="btn btn--primary btn--full-width">
								Отправить
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<div className="footer__content">
						<p>&copy; 2024 Дмитрий Журавлёв. Все права защищены.</p>
						<div className="footer__social">
							<a href="#" target="_blank">
								LinkedIn
							</a>
							<a href="#" target="_blank">
								Behance
							</a>
							<a href="#" target="_blank">
								Dribbble
							</a>
						</div>
					</div>
				</div>
			</footer>

			{/* Modal */}
			{modalOpen && currentCaseStudy && (
				<div className="modal active">
					<div className="modal__content">
						<button className="modal__close" onClick={closeModal}>
							&times;
						</button>
						<div className="case-study">
							<div className="case-study__hero">
								<h1>{currentCaseStudy.title}</h1>
								<p>{currentCaseStudy.subtitle}</p>
								<img src={currentCaseStudy.image} alt={currentCaseStudy.title} />
							</div>
							{currentCaseStudy.sections.map((section, index) => (
								<div key={index} className="case-study__section">
									<h3>{section.title}</h3>
									<p>{section.content}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Notification */}
			{notification && (
				<div className={`notification notification--${notification.type}`}>
					<div className="notification__content">
						<span>{notification.message}</span>
						<button className="notification__close" onClick={() => setNotification(null)}>
							&times;
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

const App = () => {
	return (
		<section>
			<header>
				<span>Дмитрий Журавлёв</span>
			</header>
			<h1>Дмитрий Журавлёв</h1>
			<div data-column>
				<h2>Старший продуктовый дизайнер в Лемана ПРО</h2>
				<p>
					Люблю проводить время с семьей, увлекаюсь саунд-дизайном, играю на барабанах{" "}
					<a target="_blank" href="">
						тут
					</a>{" "}
					и{" "}
					<a target="_blank" href="">
						там
					</a>
					, а летом в стрит-бол
				</p>
				<div data-flex className="links">
					<div>
						🔗<a href="#"> Мой телеграм </a>
					</div>
					<div>
						🔗<a href="#"> Мой LinkedIn</a>
					</div>
					<div>
						🔗<a href="#"> Скачать резюме</a>
					</div>
				</div>
				<div className="achievements">
					<div>🌟</div>
					<div data-column>
						<div>
							<b>Достижения</b>
						</div>
						<ul
							style={{
								listStyleType: "disc",
							}}
						>
							<li>Проектировал и запускал продукты с нуля международного масштабирования</li>
							<li>Сформировал культуру design-review и системного подхода к дизайну</li>
							<li>Спроектировал с нуля два уникальных сервиса хранения данных о почве в РФ</li>
							<li>Менторил дизайнеров: делился экспертизой в роли наставника</li>
							<li>Инициировал и внедрял личные проекты</li>
							<li>Успешно внедрял фичи в роли фича-owner</li>
						</ul>
					</div>
				</div>
				<div className="project" data-column>
					<h2>
						<a target="_blank" href="">
							Лемана ПРО (Leroy Merlin)
						</a>
					</h2>
					<div className="time">(конец 2021 — настоящее время)</div>
					<h5>
						Работаю в крупнейшей ритейл-компании по продаже товаров для дома, где занимаюсь двумя ключевыми B2B и B2C логистическими продуктами. Также менторил дизайнеров для смежной
						команды
					</h5>
					<div className="project-link">
						<img width={24} height={24} />{" "}
						<a target="_blank" href="">
							Кейсы из Лемана ПРО
						</a>
					</div>
					<img className="main_project_img" src={Lm} />
				</div>
				<div className="project" data-column>
					<h2>
						<a target="_blank" href="">
							ЛЦДА \ ПочваХаб{" "}
						</a>
					</h2>
					<div className="time">(апрель 2019 — август 2021)</div>
					<h5>
						Работал в Лаборатории цифровых двойников агроландшафтов. Мы создали с нуля инновационные российские сервисы для хранения данных о почве. Выполнял роль главного дизайнера,
						формировал Product Vision
					</h5>
					<div className="project-link lcda">
						<img width={24} height={24} />{" "}
						<a target="_blank" href="">
							Кейсы из ЛЦДА
						</a>
					</div>
					<img className="main_project_img" src={Lm} />
				</div>
				<div className="project" data-column>
					<h2>
						<a target="_blank" href="">
							Publicis Groupe
						</a>
					</h2>
					<div className="time">(июнь 2017 — сентябрь 2018)</div>
					<h5>
						Работал Digital Art-Директором в международном digital-агентстве. Формировал визуальную стратегию и креативное направление проектов для клиентов из разных отраслей. Руководил
						командой дизайнеров, участвовал в построении процессов брендинга, digital-продуктов и cross-платформенных решений
					</h5>
					<div className="project-link">
						<img width={24} height={24} />{" "}
						<a target="_blank" href="">
							Работы из Publicis Groupe
						</a>
					</div>
					<img className="main_project_img" src={Lm} />
				</div>
				<div className="project" data-column>
					<h2>
						<a target="_blank" href="">
							Aviakassa
						</a>
					</h2>
					<div className="time">(апрель 2014 — май 2017)</div>
					<h5>
						Занимался проектированием цифровых продуктов в сфере онлайн-продаж авиабилетов. Создавал интерактивные механики и проектировал пользовательский опыт для цифровых продуктов в
						тесном взаимодействии с отделом маркетинга. Фокусировался на разработке вовлекающих интерфейсов, направленных на повышение конверсии и удобства использования
					</h5>
					<div className="project-link">
						<img width={24} height={24} />{" "}
						<a target="_blank" href="">
							Работы из AK
						</a>
					</div>
					<img className="main_project_img" src={Lm} />
				</div>
			</div>
		</section>
	)
}

export default App
