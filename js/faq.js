const faqQuestions = [
  {
    item: {
      question: {
        pl: `Jak wypełnić wniosek urlopowy?`,
        ua: `Як заповнити заяву на відпустку?`,
        en: `How can I fill out a vacation application?`,
        ru: `Как заполнить заявление на отпуск?`,
      },
      answer: {
        pl: `Instrukcje z wypełniania wniosków możesz znaleźć w sekcji "Kadry".`,
        ua: `Інструкції щодо заповнення заяв знаходяться в секції "Кадри".`,
        en: `You can find instructions from filling out the applications in the "HR" section.`,
        ru: `Инструкции по заполнению заявлений находятся в секции "Кадры".`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Gdzie znajduje się stanowisko Asystentki HR?`,
        ua: `Де розташоване робоче місце Асистентки HR?`,
        en: `Where is the HR Assistant workspace located?`,
        ru: `Где находится рабочее место Ассистентки HR?`,
      },
      answer: {
        pl: `Stanowisko Asystentki HR na magazynie M13 znajduje się obok stanowiska Shift Managera Outbound, na magazynie M10 - przy wejściu na halę magazynu, na magazynie M26 - przy wejściu na pierwsze piętro (drzwi z napisem "Asystentka HR"). Informacje kontaktowe oraz godziny pracy asystentki HR możesz znaleźć w sekcji "Kontakty".`,
        ua: `Робоче місце Асистентки HR на складі M13 знаходиться біля робочого місця Керівника Зміни відділу Outbound, на складі M10 - біля входу в зал складу, на складі M26 - при вході на другий поверх (двері з підписом "Asystentka HR"). Контактна інформація та час роботи Асистентки HR знаходяться в секції "Контакти".`,
        en: `The HR Assistant workspace at the M13 warehouse is located next to the Shift Manager Outbound workspace, at the M10 warehouse - at the entrance to the hall of warehouse, at the M26 warehouse - at the entrance to the second floor (door signed "Asystentka HR"). You can find the HR Assistant's contact information and working hours in the "Contacts" section.`,
        ru: `Рабочее место Ассистентки HR на складе M13 находится возле рабочего места Руководителя Смены отдела Outbound, на складе M10 - при входе в зал стклада, на складе M26 - при входе на второй этаж (дверь с подписью "Asystentka HR"). Контактная информация и время работы Ассистентки HR находятся в секции "Контакты".`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Ile mam dni urlopu do wykorzystania?`,
        ua: `Скільки у мене залишилося днів відпустки?`,
        en: `How many leave days do I have to use?`,
        ru: `Сколько у меня осталось дней отпуска?`,
      },
      answer: {
        pl: `Jeżeli jesteś pracownikiem agencyjnym, to możesz dowiedzieć się tej informacji bezpośrednio w agencji pracy, przez którą jesteś zatrudniony. Numery kontaktowe oraz adres agencji znajduje się w sekcji "Kontakty". Jeśli jesteś zatrudniony bezpośrednio przez firmę Autodoc, to możesz się dowiedzieć tej informacji u swojego przełożonego.`,
        ua: `Якщо ви працюєте через агентство зайнятості, ви можете отримати цю інформацію безпосередньо в агентстві зайнятості, через яке ви працюєте. Контактні телефони та адресу агентств можна знайти в розділі "Контакти". Якщо ви працюєте безпосередньо в компанії Autodoc, ви можете дізнатися цю інформацію у свого керівника.`,
        en: `If you are an agency employee, you can find out this information directly from the employment agency by which you are employed. You can find the agency's contact numbers and address in the "Contacts" section. If you are employed directly by Autodoc, you can find out this information from your manager.`,
        ru: `Если вы работаете через агентство занятости, вы можете получить эту информацию непосредственно в агентстве занятости, через которое вы работаете. Контактные телефоны и адрес агентств можно найти в разделе "Контакты". Если вы работаете непосредственно в компании Autodoc, вы можете узнать эту информацию у своего руководителя.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Od kogo mogę otrzymać grafik pracy?`,
        ua: `У кого можна дізнатися графік роботи?`,
        en: `Where can I get a work schedule?`,
        ru: `У кого можно узнать график работы?`,
      },
      answer: {
        pl: `Grafik pracy znajduje się w sekcji "Grafik" lub możesz zapytać o tą informację swojego przełożonego.`,
        ua: `Графік роботи можна знайти в розділі "Графік", або запросити цю інформацію у свого керівника.`,
        en: `The work schedule can be found in the "Schedule" section or you can ask your manager for this information.`,
        ru: `График работы можно найти в разделе "График", или запросить эту информацию у своего руководителя.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kto jest odpowiedzialny za przydzielanie grafików pracy?`,
        ua: `Хто відповідає за розподіл робочих графіків?`,
        en: `Who is responsible for assigning work schedules?`,
        ru: `Кто отвечает за распределение рабочих графиков?`,
      },
      answer: {
        pl: `Odpowiedzialny za przydzielanie grafików pracy jest Shift manager.`,
        ua: `Керівник зміни відповідає за розподіл графіків роботи.`,
        en: `Responsible for assigning work schedules is the Shift manager.`,
        ru: `Руководитель смены отвечает за распределение графиков работы.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `W jakiej jestem grupie grafikowej?`,
        ua: `До якої групи робочого графіку я належу?`,
        en: `What graphic group am I in?`,
        ru: `К какой группе рабочего графика я отношусь?`,
      },
      answer: {
        pl: `Pracownik otrzymuje co miesiąc harmonogram pracy wraz z przydziałem do grupy, dodatkąwą inofmację może otrzymać u Lidera lub Shift Managera.`,
        ua: `Співробітник отримує щомісячний графік роботи з розподілом за групами. Додаткову інформацію можна отримати у Лідера або Керівника Зміни.`,
        en: `The employee receives a monthly work schedule with group assignment, additional inofmation can be obtained from the Leader or Shift Manager.`,
        ru: `Сотрудник получает ежемесячный график работы с распределением по группам. Дополнительную информацию можно получить у Лидера или Руководителя Смены.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Jakie są kryteria przypisywania do grup?`,
        ua: `Які критерії розподілу по групах?`,
        en: `What are the criteria for group assignment?`,
        ru: `Каковы критерии распределения по группам?`,
      },
      answer: {
        pl: `Przypisanie do grupy jest losowe. W przypadku nowych pracowników, przypisujemy do grupy, która liczy mniej zasobów.`,
        ua: `Розподіл за групами здійснюється випадковим чином. У випадку з новими співробітниками ми визначаємо їх у групу з меншою кількістю співробітників.`,
        en: `Assignment to a group is random. For new employees, we assign to a group with fewer resources.`,
        ru: `Распределение по группам осуществляется случайным образом. В случае с новыми сотрудниками мы определяем их в группу с меньшим количеством сотрудников.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Czy istnieje sposób na monitorowanie dni urlopowych online?`,
        ua: `Чи є можливість відстежувати кількість днів відпустки в режимі онлайн?`,
        en: `Is there a way to track vacation days online?`,
        ru: `Существует ли возможность отслеживать количество дней отпуска в режиме онлайн?`,
      },
      answer: {
        pl: `Na chwilę obecną nie.`,
        ua: `Наразі немає.`,
        en: `At the moment, no.`,
        ru: `На данный момент нет.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Gdzie znajdują się ogłoszenia o trwających rekrutacjach w naszej firmie?`,
        ua: `Де можна знайти оголошення про поточні рекрутації в нашу компанію?`,
        en: `Where are the announcements about ongoing recruitment in our company?`,
        ru: `Где можно найти объявления о текущих рекрутациях в нашу компанию?`,
      },
      answer: {
        pl: `Listę aktualnych ofert pracy w Autodoc, a także możliwość przesłania CV można znaleźć na stronie "https://www.atdl.pl".`,
        ua: `Список актуальних вакансій компанії Autodoc, а також можливість надіслати своє резюме можна знайти на сайті "https://www.atdl.pl".`,
        en: `A list of current job openings at Autodoc, as well as the opportunity to submit a resume, can be found at "https://www.atdl.pl".`,
        ru: `Список актуальных вакансий компании Autodoc, а также возможность отправить свое резюме можно найти на сайте "https://www.atdl.pl".`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Czy jest możliwość dodania przystanku na kierunku autobusu pracowniczego?`,
        ua: `Чи можна додати зупинку за напрямком руху робочого автобуса?`,
        en: `Is it possible to add a stop on the direction of the employee bus?`,
        ru: `Можно ли добавить остановку по направлению движения рабочего автобуса?`,
      },
      answer: {
        pl: `Możesz zwrócić się z propozycją o dodaniu przystanku do przedstawiciela pracowników.`,
        ua: `Ви можете звернутися до представника співробітників із пропозицією додати зупинку.`,
        en: `You can address the proposal to add a stop to the employee representative.`,
        ru: `Вы можете обратиться к представителю сотрудников с предложением добавить остановку.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Dlaczego jestem delegowany na inne obszary?`,
        ua: `Чому мене делегують до інших відділів?`,
        en: `Why am I delegated to other areas?`,
        ru: `Почему меня делегируют в другие отделы?`,
      },
      answer: {
        pl: `Delegowanie pracowników odbywa się ze względu na priorytyzacje procesów.`,
        ua: `Делегування співробітників відбувається з міркувань пріоритезації процесів.`,
        en: `Delegation of employees is done due to prioritization of processes.`,
        ru: `Делегирование сотрудников происходит из соображений приоритезации процессов.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Dlaczego jestem oddelegowany skoro mamy sporo pracy na naszym obszarze?`,
        ua: `Чому мене делегували, коли у нас у відділі багато роботи?`,
        en: `Why am I delegated when we have a lot of work in our area?`,
        ru: `Почему меня делегировали, когда у нас в отделе много работы?`,
      },
      answer: {
        pl: `Delegowanie pracowników odbywa się ze względu na priorytyzacje procesów.`,
        ua: `Делегування співробітників відбувається з міркувань пріоритезації процесів.`,
        en: `Delegation of employees is done due to prioritization of processes.`,
        ru: `Делегирование сотрудников происходит из соображений приоритезации процессов.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kiedy można wymienić buty na nowe?`,
        ua: `Коли можна замінити взуття на нове?`,
        en: `When can I replace my shoes with new ones?`,
        ru: `Когда можно заменить обувь на новую?`,
      },
      answer: {
        pl: `W przypadku wymiany obuwia roboczego wydanego w momencie zatrudnienia, można je wymienić na nowe po 6 miesiącach pracy. Kolejne wymiany przeprowadzane są co 18 miesięcy.`,
        ua: `У разі заміни робочого взуття, виданого під час прийняття на роботу, його можна замінити через 6 місяців роботи. Наступні заміни проводяться кожні 18 місяців.`,
        en: `When replacing work shoes issued at the time of employment, they can be replaced after 6 months of work. Subsequent replacements are carried out every 18 months.`,
        ru: `В случае замены рабочей обуви, выданной при приеме на работу, ее можно заменить через 6 месяцев работы. Последующие замены производятся каждые 18 месяцев.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kiedy można wymienić polar na nowy?`,
        ua: `Коли можна замінити фліс на новий?`,
        en: `When can I replace my fleece with new ones?`,
        ru: `Когда можно заменить флис на новый?`,
      },
      answer: {
        pl: `Polar można wymienić na nowy po upływie 24 miesięcy od daty wydania poprzedniego.`,
        ua: `Фліс може бути замінений на новий через 24 місяці після видачі попереднього.`,
        en: `Fleece can be replaced with a new one after 24 months from the date of issue of the previous one.`,
        ru: `Флис может быть заменён на новый через 24 месяца после выдачи предыдущего.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kiedy mogę otrzymać polar?`,
        ua: `Коли можна буде отримати фліс?`,
        en: `When can I get a fleece?`,
        ru: `Когда можно будет получить флис?`,
      },
      answer: {
        pl: `Po przepracowaniu 3 miesięcy.`,
        ua: `Після роботи протягом 3-х місяців.`,
        en: `After working for 3 months.`,
        ru: `После работы в течение 3-х месяцев.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Ile mogę wziąć urlopu bezpłatnego?`,
        ua: `Скільки я можу взяти неоплачуваних відпусток?`,
        en: `How much unpaid leave can I take?`,
        ru: `Сколько я могу взять неоплачиваемых отпусков?`,
      },
      answer: {
        pl: `Nie ma ograniczeń w urlopie bezpłatnym, należy jednak pamiętać że pracownik na urlopie bezpłatnym blokuje nam wakat co skutkuje często dezorganizacją pracy. O przyznaniu urlopu bezpłatnego decyduje Kierownik Magazynu lub Shift Manager rozpatrując indywidualnie każdy wniosek.`,
        ua: `Обмежень щодо відпустки без збереження заробітної плати немає, проте слід пам'ятати, що співробітник, який перебуває в неоплачуваній відпустці, блокує нам вакансію, що часто призводить до дезорганізації роботи. Рішення про надання відпустки без збереження заробітної плати приймає Керівник Складу або Керівник Зміни, розглядаючи кожну заяву індивідуально.`,
        en: `There are no restrictions on unpaid leave, but it should be remembered that an employee on unpaid leave blocks our vacancy which often results in disorganization of work. The granting of unpaid leave is decided by the Warehouse Manager or Shift Manager considering each application individually.`,
        ru: `Ограничений по отпуску без сохранения заработной платы нет, однако следует помнить, что сотрудник, находящийся в неоплачиваемом отпуске, блокирует нам вакансию, что часто приводит к дезорганизации работы. Решение о предоставлении отпуска без сохранения заработной платы принимает Руководитель Склада или Руководитель Смены, рассматривая каждое заявление индивидуально.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Jak zmienić warunki zatrudnienia? Chcę umowę na czas nieokreślony.`,
        ua: `Як змінити умови працевлаштування? Я хочу укласти безстроковий договір.`,
        en: `How can I change the terms of employment? I want a contract of indefinite duration.`,
        ru: `Как изменить условия трудоустройства? Я хочу заключить безсрочный договор.`,
      },
      answer: {
        pl: `W celu zmiany formy zatrudnienia na czas nieokreślony należy złożyć pisemny wniosek do swojego bezpośredniego przełożonego. W ciągu 30 dniu od daty złożenia takiego wniosku otrzymasz odpowiedz z działu HR.`,
        ua: `Для того, щоб змінити форму зайнятості на постійну, ви повинні подати письмову заяву на ім'я свого безпосереднього керівника. Ви отримаєте відповідь від відділу кадрів протягом 30 днів з моменту подачі такої заяви.`,
        en: `In order to change the form of employment for an indefinite period of time, you must submit a written request to your immediate manager. Within 30 days from the date of such request, you will receive a response from the HR department`,
        ru: `Чтобы сменить форму занятости на постоянную, необходимо подать письменное заявление своему непосредственному руководителю. Вы получите ответ от отдела кадров в течение 30 дней с момента подачи такого заявления.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Spóźniłem się, jakie są konsekwencję?`,
        ua: `Я спізнився, які можуть бути наслідки?`,
        en: `I was late, what are the consequences?`,
        ru: `Я опоздал, какие могут быть последствия?`,
      },
      answer: {
        pl: `Każdy przypadek jest rozpatrywany indywidualnie. W przypadku zaistnienia takiej sytuacji zgłoś się do bezpośredniego przełożonego.`,
        ua: `Кожен випадок розглядається в індивідуальному порядку. У разі виникнення такої ситуації необхідно повідомити про це свого безпосереднього керівника.`,
        en: `Each case is handled on a case-by-case basis. If such a situation arises, report to your immediate manager.`,
        ru: `Каждый случай рассматривается в индивидуальном порядке. При возникновении такой ситуации необходимо сообщить об этом своему непосредственному руководителю.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kiedy powinienem logować się na "Crosstraining"?`,
        ua: `Коли я повинен перемикатися на "Crosstraining"?`,
        en: `When should I log in for "Crosstraining"?`,
        ru: `Когда я должен переключаться на "Crosstraining"?`,
      },
      answer: {
        pl: `Po otrzymaniu informacji od Lidera.`,
        ua: `При отриманні інформації від Лідера.`,
        en: `After receiving information from the Leader.`,
        ru: `При получении информации от Лидера.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Kiedy powinienem logować się na "Overtime"?`,
        ua: `Коли я повинен перемикатися на "Overtime"?`,
        en: `When should I log in for "Overtime"?`,
        ru: `Когда я должен переключаться на "Overtime"?`,
      },
      answer: {
        pl: `Podczas pracy w nadgodzinach.`,
        ua: `Під час понаднормової роботи.`,
        en: `During overtime.`,
        ru: `Во время сверхурочной работы.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Jaką stawkę ma Instruktor?`,
        ua: `Яка ставка в Інструктора?`,
        en: `What is the Instructor's rate of pay?`,
        ru: `Какая ставка у Инструктора?`,
      },
      answer: {
        pl: `Stawki pracowników Autodoc są informacjami poufnymi.`,
        ua: `Ставки співробітників Autodoc є конфіденційною інформацією.`,
        en: `Autodoc employee rates of pay are confidential information.`,
        ru: `Ставки сотрудников Autodoc являются конфиденциальной информацией.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Jak zostać Instruktorem/Problem Solverem?`,
        ua: `Як отримати посаду Instructor/Problem Solver?`,
        en: `How to become an Instructor/Problem Solver?`,
        ru: `Как получить должность Instructor/Problem Solver?`,
      },
      answer: {
        pl: `Listę aktualnych ofert pracy w Autodoc, a także możliwość przesłania CV można znaleźć na stronie "https://www.atdl.pl".`,
        ua: `Список актуальних вакансій компанії Autodoc, а також можливість надіслати своє резюме можна знайти на сайті "https://www.atdl.pl".`,
        en: `A list of current job openings at Autodoc, as well as the opportunity to submit a resume, can be found at "https://www.atdl.pl".`,
        ru: `Список актуальных вакансий компании Autodoc, а также возможность отправить свое резюме можно найти на сайте "https://www.atdl.pl".`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Nie brałem od pół roku L4, teraz tak się stało że zachorowałem. Czy jest szansa na naliczenie premii?`,
        ua: `Я півроку не брав лікарняний, зараз так вийшло, що захворів. Чи є шанс нарахування премії?`,
        en: `I have not taken L4 for half a year, now it so happened that I fell ill. Do I have a chance to charge a bonus?`,
        ru: `Я полгода не брал больничный, сейчас так получилось, что заболел. Есть ли шанс начисления премии?`,
      },
      answer: {
        pl: `Regulamin naliczania premii zadaniowo-obecnościowej znajduje się w sekcji "Regulaminy".`,
        ua: `Регламент про розрахунок премії за виконання завдань і відвідуваність наведено в розділі "Положення"`,
        en: `You can find the regulations for calculating the task and attendance bonus in the "Regulations" section.`,
        ru: `Регламент о расчете премии за выполнение заданий и посещаемость приведён в разделе "Акты"`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Zapomniałem klucz od szafki, tam są buty, co mam robić?`,
        ua: `Я забув ключ від шафки, там лежить взуття, що мені робити?`,
        en: `I forgot my locker key, there are shoes there, what should I do?`,
        ru: `Я забыл ключ от шкафчика, там лежит обувь, что мне делать?`,
      },
      answer: {
        pl: `Jeśli masz możliwość wrócić do domu po kluczyk to będzie to najlepszym rozwiązaniem. W innym przypadku musisz zgłosić się do Asystentki biura żeby pobrać kluczyk zapasowy.`,
        ua: `Якщо у вас є можливість повернутися додому і забрати ключ, то це буде найкращим варіантом. В іншому випадку необхідно звернутися до Асистентки Офісу за запасним ключем.`,
        en: `If you have the opportunity to go home to get a key then that would be the best option. Otherwise, you must report to the Office Assistant to retrieve a spare key.`,
        ru: `Если у вас есть возможность вернуться домой и забрать ключ, то это будет наилучшим вариантом. В противном случае необходимо обратиться к Ассистентке Офиса за запасным ключом.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Nie postawiłem butów do szafki, dziś przyszedłem i butów niema, co teraz?`,
        ua: `Я не поклав взуття до шафи. Сьогодні прийшов, а взуття немає. Що тепер робити?`,
        en: `I didn't put my shoes in the locker, today I came and the shoes are gone. What should I do?`,
        ru: `Я не положил обувь в шкафчик. Сегодня пришел, а обуви нет. Что теперь делать?`,
      },
      answer: {
        pl: `W przypadku zaistnienia takiej sytuacji zgłoś się do Asystentki biura.`,
        ua: `У разі виникнення подібної ситуації слід звернутися до Асистентки Офісу.`,
        en: `If such a situation arises, report to the Office Assistant.`,
        ru: `При возникновении подобной ситуации следует обратиться к Ассистентке Офиса.`,
      },
    },
  },
  {
    item: {
      question: {
        pl: `Chcę zaprosić swoją żone/brata/kolegę do Autodoc, gdzie powinna/en się zgłosić?`,
        ua: `Я хочу запросити свою дружину/брата/друга в Autodoc, куди їй/йому слід звернутися?`,
        en: `I want to invite my wife/brother/friend to Autodoc, where should she/he apply?`,
        ru: `Я хочу пригласить свою жену/брата/друга в Autodoc, куда ей/ему следует обратиться?`,
      },
      answer: {
        pl: `Na chwilę obecną nie mamy potwierdzenia o działaniu programu poleceń.`,
        ua: `На даний момент ми не маємо підтвердження дії реферальної програми.`,
        en: `At the moment, we have no confirmation about the operation of the referral program.`,
        ru: `На данный момент мы не располагаем подтверждением действия реферальной программы.`,
      },
    },
  },
];
