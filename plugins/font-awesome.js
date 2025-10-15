import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons/faTicketAlt'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench'
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons/faScrewdriver'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

import faPopOs from '~/icons/fa-pop-os'

config.autoAddCss = false

library.add(faArrowLeft)
library.add(faBars)
library.add(faBolt)
library.add(faCog)
library.add(faPaperPlane)
library.add(faPhone)
library.add(faSearch)
library.add(faTicketAlt)
library.add(faUser)
library.add(faWrench)
library.add(faScrewdriver)
library.add(faGithub)
library.add(faUbuntu)
library.add(faPopOs)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
