<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Let's Summarize!
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<ol>
					<li>
						A wave is a disturbance that transfers energy.
					</li>
					<li>
						James Clerk Maxwell formulated the Electromagnetic Wave Theory which says that an oscillating electric current should be capable of radiating energy in the form of electromagnetic waves.
					</li>
					<li>
						Heinrich Hertz discovered the Hertzian waves which is now known as radio waves.
					</li>
					<li>
						Hertz is the unit used to measure the frequency of waves.
					</li>
					<li>
						Electromagnetic (EM) waves have unique properties.
						<ul>
							<li>
								EM waves can travel through a vacuum.
							</li>
							<li>
								EM waves travel at the speed which is constant in a given medium and has a value of c = 3.0 x 108 m/s in vacuum.
							</li>
							<li>
								EM waves are disturbances in a field rather than in a medium.
							</li>
							<li>
								EM waves have an electric field that travels perpendicular with the magnetic field.
							</li>
							<li>
								EM waves form when moving charged particles transfer energy through a field.
							</li>
						</ul>
					</li>
					<li>
						Most EM waves are invisible to the eye but detectable. Only the visible light is seen by humans.
					</li>
					<li>
						Waves in the EM spectrum include the following from the longest wavelength to the shortest wavelength.
						<ul>
							<li>Radio waves</li>
							<li>Microwaves</li>
							<li>Infrared waves</li>
							<li>Visible light</li>
							<li>Ultraviolet</li>
							<li>X-rays</li>
							<li>Gamma rays</li>
						</ul>
						<span class="small">
							The order also shows the increasing frequency and energy of the EM waves.
						</span>
					</li>
					<li>
						The waves in the various regions in the EM spectrum share similar properties but differ in wavelength, frequency, energy, and method of production.
					</li>
					<li>
						The regions in the EM spectrum have various uses and applications as follows:
						<table border="1" cellspacing="0" cellpadding="5" class="text-center">
							<thead>
								<tr>
									<td>EM Waves</td>
									<td>Application / Uses</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Radio Waves</td>
									<td>Radio and Television Communication</td>
								</tr>
								<tr>
									<td>Microwaves</td>
									<td>Satelite Television Communication</td>
								</tr>
								<tr>
									<td>Infrared Waves</td>
									<td>Remote Control, Household electrical appliances</td>
								</tr>
								<tr>
									<td>Visible Light</td>
									<td>
										Artificial lighting, Optical Fibers in medical users, Screen of electronic devices
									</td>
								</tr>
								<tr>
									<td>Ultraviolet</td>
									<td>Sterilization, Flourescence</td>
								</tr>
								<tr>
									<td>X-rays</td>
									<td>Medical use, Engineering applications</td>
								</tr>
								<tr>
									<td>Gamma Rays</td>
									<td>Medical Treatment</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li>
						Each type of EM wave poses a certain degree of risk and danger to people and environment.
					</li>
				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../assets/js/mixins/Page.js'

export default {
	mixins: [page]
}
</script>
<style></style>