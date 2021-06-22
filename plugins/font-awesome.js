import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

import faPopOs from '~/icons/fa-pop-os'

config.autoAddCss = false

library.add(faArrowLeft)
library.add(faBars)
library.add(faSearch)
library.add(faGithub)
library.add(faUbuntu)
library.add(faPopOs)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
