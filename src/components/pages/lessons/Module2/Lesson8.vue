<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Ultraviolet Radiation, X-rays, Gamma Rays
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p class="text-italic">
					<strong>Ultraviolet Radiation</strong>
				</p>
				<blockquote>
					Ultraviolet radiation lies just beyond the violet end of the visible spectrum. Ultraviolet waves have shorter wavelengths than the visible light and carry more energy.
				</blockquote>
				<strong>Some Uses of UV Radiation</strong>
				<p>
					The sun is our main source of ultraviolet radiation but there are also artificial sources of UV light. Ultraviolet radiations in UV lamps are used by banks to check the signature on a passbook. The signature is marked on the passbook with fluorescent ink. It becomes visible when viewed under an ultraviolet lamp. These lamps are also used to identify fake banknotes. Ultraviolet radiation is also used in sterilizing water from drinking fountains. Some washing powder also contains fluorescent chemicals which glow in sunlight. This makes your shirt look whiter than white in daylight. Ultraviolet radiation in sunlight produces vitamin D in the skin and gives us tanning effect. But since UV rays have high energy, it could be harmful to some extent. It could burn the skin and hurt our eyes. Overexposure to UV radiation may cause skin cancer. Suntan or sunscreen lotions serve as filters to protect the body from ultraviolet radiation.
				</p>

				<p class="text-italic"><strong>X-rays</strong></p>
				<blockquote>
					X-rays come just after the ultraviolet rays. They are of shorter wavelength but carries higher energy than the UV.
				</blockquote>
				<div class="card lesson-card">
					<img :src="'./statics/images/m2l8.jpg'" alt="">
				</div>
				<p>
					X-rays are produced using an X-ray tube. They are emitted when fast moving electrons hit a metal target. X-rays were discovered by Wilhelm Conrad Roentgen in 1895.
				</p>
				<p>
					Long wavelength X-rays can penetrate the flesh but not the bones. They are used in X-ray photography to help doctors look inside the body. They are useful in diagnosing bone fractures and tumors. Short wavelength X-rays can penetrate even through metals. They are used in industry to inspect welded joints for faults.
				</p>
				<p>
					All X-rays are dangerous because they can damage healthy living cells of the body. This is the reason why frequent exposure to X-rays should be avoided. Too much exposure to X-rays can damage body tissues and can cause cancer.
				</p>

				<p class="text-italic"><strong>Gamma Rays</strong></p>
				<blockquote>
					Gamma rays lie at the other end of the electromagnetic spectrum. They are shortest in wavelength and highest in frequency. They carry the highest amount of energy, thus, they are more dangerous. Gamma rays are emitted by stars and some radioactive substances. They can only be blocked with lead and thick concrete.
				</blockquote>
				<p>
					Gamma rays are very strong that they can kill living cells. Gamma rays are used to treat cancer through the process called radiotherapy. They are also used for sterilization of drinking water.
				</p>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../../assets/js/mixins/Page.js'
export default {
	mixins: [page]
}
</script>
<style lang="scss"></style>