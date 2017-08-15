<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 3: Pre-Test
			</q-toolbar-title>

			<button :disabled="!canSubmit || submitted" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					Directions. Choose the letter of the correct answer.
				</strong>

				 <ol :class="submitted ? 'submitted' : ''">
					
					<li :class="status_1.item1">
						You see the reflection of the clock without numbers in your plane mirror. The image formed by the hands of the clock shows the time of 3:30. What is the real time?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="a"></q-radio> 
								<strong>A</strong> 
								<span>3:30</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="b"></q-radio> 
								<strong>B</strong> 
								<span>8:30</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="c"></q-radio> 
								<strong>C</strong> 
								<span>9:30</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="d"></q-radio> 
								<strong>D</strong> 
								<span>10:30</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item2">
						How much larger will your classroom seem to appear if the entire two adjacent walls of your classroom consist of plane mirrors?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="a"></q-radio> 
								<strong>A</strong> 
								<span>2x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="c"></q-radio> 
								<strong>C</strong> 
								<span>4x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="d"></q-radio> 
								<strong>D</strong> 
								<span>can’t be determined</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item3">
						Where is the image located if an object is 30 cm in front of convex mirror with a focal length of 20 cm?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="a"></q-radio> 
								<strong>A</strong> 
								<span>Between F and V</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="b"></q-radio> 
								<strong>B</strong> 
								<span>Between C and F</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="c"></q-radio> 
								<strong>C</strong> 
								<span>In front of the mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="d"></q-radio> 
								<strong>D</strong> 
								<span>Can’t be determined</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item4">
						What is the distance of your image from you if you stand 1.5m in front of a plane mirror?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="a"></q-radio> 
								<strong>A</strong> 
								<span>1.5 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="b"></q-radio> 
								<strong>B</strong> 
								<span>2.0 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="c"></q-radio> 
								<strong>C</strong> 
								<span>3.0 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="d"></q-radio> 
								<strong>D</strong> 
								<span>4.5 m</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item5">
						Zed stands 1.5-m tall in front of a plane mirror. What is the height of his image?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="a"></q-radio> 
								<strong>A</strong> 
								<span>4.5 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3.0 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="c"></q-radio> 
								<strong>C</strong> 
								<span>2.0 m</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="d"></q-radio> 
								<strong>D</strong> 
								<span>1.5 m</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item6">
						A light ray, traveling parallel to a concave mirror’s axis, strikes the mirror’s surface. The reflected ray __________.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item6" val="a"></q-radio> 
								<strong>A</strong> 
								<span>passes through the mirror’s focal point</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item6" val="b"></q-radio> 
								<strong>B</strong> 
								<span>again travels parallel to the mirror’s axis</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item6" val="c"></q-radio> 
								<strong>C</strong> 
								<span>travels at right angles to the mirror’s axis</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item6" val="d"></q-radio> 
								<strong>D</strong> 
								<span>passes through the mirror’s center of curvature</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item7">
						An object is placed between a concave mirror and its focal point. What is the type and orientation of the image formed?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item7" val="a"></q-radio> 
								<strong>A</strong> 
								<span>virtual and inverted</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item7" val="b"></q-radio> 
								<strong>B</strong> 
								<span>real and inverted</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item7" val="c"></q-radio> 
								<strong>C</strong> 
								<span>virtual and erect</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item7" val="d"></q-radio> 
								<strong>D</strong> 
								<span>real and erect</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item8">
						What kind of mirror is used in automobiles and trucks to give the driver a wider area and smaller image of traffic behind him?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item8" val="a"></q-radio> 
								<strong>A</strong> 
								<span>Plane mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item8" val="b"></q-radio> 
								<strong>B</strong> 
								<span>Convex mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item8" val="c"></q-radio> 
								<strong>C</strong> 
								<span>Concave mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item8" val="d"></q-radio> 
								<strong>D</strong> 
								<span>None of the above</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item9">
						What type of mirror do dentists usually use to see clearly the images of our teeth?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item9" val="a"></q-radio> 
								<strong>A</strong> 
								<span>Plane mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item9" val="b"></q-radio> 
								<strong>B</strong> 
								<span>Convex mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item9" val="c"></q-radio> 
								<strong>C</strong> 
								<span>Concave mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item9" val="d"></q-radio> 
								<strong>D</strong> 
								<span>None of the above</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item10">
						When a small object is placed on the principal axis of a concave mirror between the focus and the mirror (as in the figure below), the image formed is ____________.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item10" val="a"></q-radio> 
								<strong>A</strong> 
								<span>erect, magnified, and virtual</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item10" val="b"></q-radio> 
								<strong>B</strong> 
								<span>inverted, magnified, and real</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item10" val="c"></q-radio> 
								<strong>C</strong> 
								<span>inverted, reduced, and real</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item10" val="d"></q-radio> 
								<strong>D</strong> 
								<span>erect, reduced, and real</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item11">
						A white sheet of paper cannot act as mirror because it ____________ the rays of light.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item11" val="a"></q-radio> 
								<strong>A</strong> 
								<span>diffracts</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item11" val="b"></q-radio> 
								<strong>B</strong> 
								<span>diffuses</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item11" val="c"></q-radio> 
								<strong>C</strong> 
								<span>interferes</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item11" val="d"></q-radio> 
								<strong>D</strong> 
								<span>refract</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item12">
						You see your face clearly if you look down on a pool of still water. Which one of the following statements gives the best explanation for this observation?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item12" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Light entering the water is dispersed.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item12" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Regular reflection of light happens on the surface of still water.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item12" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Irregular reflection of light happens on the surface of still water.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item12" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Light is reflected from the surface of water in different directions.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item13">
						Where should the object be placed in front of a concave mirror to form a virtual and magnified image?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item13" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									At the focus.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item13" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									At the center of curvature
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item13" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Between the focus and the vertex
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item13" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Between the center of curvature and focus
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item14">
						Which of the following is/are true of a concave mirror?
						<p>
							I. It will never form a real image
						</p>
						<p>
							II. An inverted image will be formed if the object distance is greater than the focal length
						</p>
						<p>
							III. An object can be magnified if placed at f
						</p>
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item14" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									I only
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item14" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									II only
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item14" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									I and II
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item14" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									I, II, and III
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item15">
						A light ray, traveling parallel to a concave lens’ axis and strikes the lens, will refract and__________.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item15" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									pass through the lens’ focal point
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item15" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									travel parallel to the principal axis
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item15" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									continue to travel in the same direction
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item15" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									travel at right angles to the principal axis
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item16">
						What kind of image is formed by concave lenses?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item16" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									always real
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item16" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									always virtual
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item16" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									could be real or virtual; depends on the distance of the object from the focal point
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item16" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									could be real or virtual, but always real when the object is placed at the focal point
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item17">
						Sun’s rays are observed to focus at a point behind a lens. What kind of lens was used?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item17" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Converging Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item17" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Diverging Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item17" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Focusing Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item17" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									None of the above
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item18">
						This optical instrument uses 2 convex lenses to make a smaller object larger.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item18" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Camera
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item18" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Microscope
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item18" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Oscilloscope
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item18" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Telescope
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item19">
						Which of the following optical instruments will be used to produce a reduced and inverted image of a distant object?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item19" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Camera
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item19" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Projector
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item19" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Microscope
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item19" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Refracting Telescope
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item20">
						A photocopy “Xerox” machine produces an image that is of equal size as the object. Considering the location of an object in a convex lens, where is the object located or placed to produce an image that is of equal size to the object?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item20" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									At F’
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item20" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									At 2F’
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item20" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Between F’ and V
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item20" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Between 2F’ and F’
								</span>
							</label>
						</div>
					</li>

				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import mixin from '../mixin'
export default {
	mixins: [mixin],
	data () {
		return {
			storageKey: 'm3-quiz-pre',
			choices_1: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
				item6: '',
				item7: '',
				item8: '',
				item9: '',
				item10: '',
				item11: '',
				item12: '',
				item13: '',
				item14: '',
				item15: '',
				item16: '',
				item17: '',
				item18: '',
				item19: '',
				item20: '',
			},
			answers_1: {
				item1: ['b'],
				item2: ['c'],
				item3: ['a'],
				item4: ['c'],
				item5: ['d'],
				item6: ['a'],
				item7: ['c'],
				item8: ['b'],
				item9: ['c'],
				item10: ['a'],
				item11: ['b'],
				item12: ['b'],
				item13: ['c'],
				item14: ['b'],
				item15: ['a'],
				item16: ['b'],
				item17: ['a'],
				item18: ['b'],
				item19: ['a'],
				item20: ['b'],
			},
		}
	},
	computed: {

		totalScore () {
			let status1 = Object.keys(this.status_1)
			let correct1 = status1.filter((item) => {
				return this.status_1[item] == 'correct'
			})

			return correct1.length
		},

		totalItems () {
			let answers1 = Object.keys(this.answers_1)
			return answers1.length
		},
		status_1 () {
			return {
				item1: this.compute(this.answers_1.item1, this.choices_1.item1),
				item2: this.compute(this.answers_1.item2, this.choices_1.item2),
				item3: this.compute(this.answers_1.item3, this.choices_1.item3),
				item4: this.compute(this.answers_1.item4, this.choices_1.item4),
				item5: this.compute(this.answers_1.item5, this.choices_1.item5),
				item6: this.compute(this.answers_1.item6, this.choices_1.item6),
				item7: this.compute(this.answers_1.item7, this.choices_1.item7),
				item8: this.compute(this.answers_1.item8, this.choices_1.item8),
				item9: this.compute(this.answers_1.item9, this.choices_1.item9),
				item10: this.compute(this.answers_1.item10, this.choices_1.item10),
				item11: this.compute(this.answers_1.item11, this.choices_1.item11),
				item12: this.compute(this.answers_1.item12, this.choices_1.item12),
				item13: this.compute(this.answers_1.item13, this.choices_1.item13),
				item14: this.compute(this.answers_1.item14, this.choices_1.item14),
				item15: this.compute(this.answers_1.item15, this.choices_1.item15),
				item16: this.compute(this.answers_1.item16, this.choices_1.item16),
				item17: this.compute(this.answers_1.item17, this.choices_1.item17),
				item18: this.compute(this.answers_1.item18, this.choices_1.item18),
				item19: this.compute(this.answers_1.item19, this.choices_1.item19),
				item20: this.compute(this.answers_1.item20, this.choices_1.item20),
			}
		}
	}
}
</script>
<style lang="scss"></style>