import { RouterComponent, defineRouter } from 'rasengan'
import ServerSecurity from './server_security.page'
import InternetKitConfiguration from './internet_kit_configuration.page'
import StreamingServices from './streaming_services.page'
import ServicesLayout from './services.layout'

class ServicesRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: ServicesLayout,
	pages: [ServerSecurity, InternetKitConfiguration, StreamingServices],
})(ServicesRouter)
