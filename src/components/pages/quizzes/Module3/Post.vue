<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 3: Post-Test
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
					Directions. Choose the letter of the best answer.
				</strong>
				<ol :class="submitted ? 'submitted' : ''">
					
					<li :class="status_1.item1">
						As indicated by the hands of the clock without numbers, the real time is 9:30. What is the time indicated in its image if the clock is placed in front of a plane mirror.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="a"></q-radio> 
								<strong>A</strong> 
								<span>2:30</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3:30</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="c"></q-radio> 
								<strong>C</strong> 
								<span>9:30</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="d"></q-radio> 
								<strong>D</strong> 
								<span>10:30</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item2">
						The entire two opposite walls in your room consist of plane mirrors, how much larger will your room seem to appear?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="a"></q-radio> 
								<strong>A</strong> 
								<span>2x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="c"></q-radio> 
								<strong>C</strong> 
								<span>4x larger</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="d"></q-radio> 
								<strong>D</strong> 
								<span>infinite</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item3">
						If you stand in front of two adjacent large mirrors (at 90o angle), how many images will you see?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="a"></q-radio> 
								<strong>A</strong> 
								<span>1</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="b"></q-radio> 
								<strong>B</strong> 
								<span>2</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="c"></q-radio> 
								<strong>C</strong> 
								<span>3</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="d"></q-radio> 
								<strong>D</strong> 
								<span>4</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item4">
						If you placed a number chart in front of a plane mirror, what numbers will you read properly in the mirror?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="a"></q-radio> 
								<strong>A</strong> 
								<span>0, 1, 6, 8, and 9</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="b"></q-radio> 
								<strong>B</strong> 
								<span>0, 1, and 6</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="c"></q-radio> 
								<strong>C</strong> 
								<span>6 and 9</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="d"></q-radio> 
								<strong>D</strong> 
								<span>0 and 8</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item5">
						An object is 6 cm in front of convex mirror with a focal length of 6 cm. What is the location of the image formed?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="a"></q-radio> 
								<strong>A</strong> 
								<span>Between F and V</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="b"></q-radio> 
								<strong>B</strong> 
								<span>Between C and F</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="c"></q-radio> 
								<strong>C</strong> 
								<span>In front of the mirror</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="d"></q-radio> 
								<strong>D</strong> 
								<span>Can’t be determined</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item6">
						A man 1.30-m tall stands 5.20 meters from a concave mirror. If the image could be formed on a screen 15.0 cm from the mirror, what is the size of the image?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="a"></q-radio> 
								<strong>A</strong> 
								<span>0.07 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3.75 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="c"></q-radio> 
								<strong>C</strong> 
								<span>10.5 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="d"></q-radio> 
								<strong>D</strong> 
								<span>14.6 cm</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item7">
						What is the focal length of the mirror in no. 6?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="a"></q-radio> 
								<strong>A</strong> 
								<span>0.07 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="b"></q-radio> 
								<strong>B</strong> 
								<span>3.75 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="c"></q-radio> 
								<strong>C</strong> 
								<span>10.5 cm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="d"></q-radio> 
								<strong>D</strong> 
								<span>14.6 cm</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item8">
						An object is placed between a concave mirror and its focal point. What is the type and orientation of the image formed?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="a"></q-radio> 
								<strong>A</strong> 
								<span>virtual and inverted</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="b"></q-radio> 
								<strong>B</strong> 
								<span>virtual and erect</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="c"></q-radio> 
								<strong>C</strong> 
								<span>real and inverted</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="d"></q-radio> 
								<strong>D</strong> 
								<span>real and erect</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item9">
						A light ray, traveling parallel to a concave mirror’s axis, strikes the mirror’s surface. What is the direction of the reflected ray?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="a"></q-radio> 
								<strong>A</strong> 
								<span>It passes through the mirror’s focal point.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="b"></q-radio> 
								<strong>B</strong> 
								<span>It travels again parallel to the mirror’s axis.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="c"></q-radio> 
								<strong>C</strong> 
								<span>It travels at right angles to the mirror’s axis.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="d"></q-radio> 
								<strong>D</strong> 
								<span>It passes through the mirror’s center of curvature.</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item10">
						An object is kept at a distance of 150 mm from a concave mirror with a radius of curvature of 600 mm. Find the image distance.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="a"></q-radio> 
								<strong>A</strong> 
								<span>-150 mm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="b"></q-radio> 
								<strong>B</strong> 
								<span>150 mm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="c"></q-radio> 
								<strong>C</strong> 
								<span>-300 mm</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="d"></q-radio> 
								<strong>D</strong> 
								<span>300 mm</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item11">
						Why is it easier to read a newspaper than a glossy magazine?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Because incident rays of light on a newspaper reflect in different directions while incident rays of light on a glossy magazine reflect in only one direction.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Because incident rays of light on a newspaper reflect in only one direction while incident rays of light on a glossy magazine reflect in different directions.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Because incident rays of light on a glossy magazine converge at the focus.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Because incident rays of light on a newspaper converge at the focus.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item12">
						What kind of mirror is used by department stores to give a wider area and smaller image of the shoppers/buyers?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Plane mirror
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Convex mirror
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Concave mirror
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									None of the above
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item13">
						If you look down on a pool of wavy water, you can’t see your face clearly. Which one of the following gives the best explanation for this observation?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Light entering the water is dispersed.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Regular reflection of light happens on the surface of wavy water.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Irregular reflection of light happens on the surface of wavy water.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Light is reflected from the surface of water in the different direction.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item14">
						Where should an object be placed in front of a concave mirror so that the image will have the same size as the object?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									At the focus
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									At the center of curvature
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Between the focus and the vertex
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Between the center of curvature and focus
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item15">
						Which of the following is/are true of a convex mirror?
						<p>
							I. It will never form a real image
						</p>
						<p>
							II. An inverted image will be formed if the object distance is greater than the focal length
						</p>
						<p>
							III. An object can be magnified if it is placed at p = 3f
						</p>
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									I only
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									II only
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									I and II
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									I, II, and III
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item16">
						A light ray traveling obliquely to a convex mirror’s axis, goes directly to the mirror’s center of curvature before striking the mirror’s surface. What is the direction of the reflected ray after hitting the mirror?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item16" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									It travels parallel to the mirror’s axis
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item16" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									It passes through the mirror’s focal point
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item16" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									It travels at right angles to the mirror’s axis
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item16" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									It travels back through the mirror’s center of curvature.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item17">
						What type of lens produces smaller and upright images?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item17" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Concave lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item17" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Convex lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item17" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Converging lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item17" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									Can’t be determined
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item18">
						An object is kept at a distance of 80.00 cm from a convex lens of focal length 25.00 cm. Find the distance between its image and lens.
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item18" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									19.05 cm
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item18" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									25.25 cm
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item18" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									36.36 cm
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item18" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									no image
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item19">
						A light ray, traveling parallel to the axis of a convex lens, strikes the lens. What happens to this ray after traveling through the lens?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item19" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									It travels crossing the axis at a point equal to twice the focal length.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item19" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									It travels to the axis passing between the lens and its focal point.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item19" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									It travels to the axis passing through its focal point.
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item19" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									It travels parallel to the principal axis.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item20">
						Sun’s rays are observed to focus at a point behind the fishbowl near the window. The fishbowl act as what type of lens?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item20" val="a"></q-radio> 
								<strong>A</strong> 
								<span>
									Converging Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item20" val="b"></q-radio> 
								<strong>B</strong> 
								<span>
									Diverging Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item20" val="c"></q-radio> 
								<strong>C</strong> 
								<span>
									Focusing Lens
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item20" val="d"></q-radio> 
								<strong>D</strong> 
								<span>
									None of the above
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
			storageKey: 'm3-quiz-post',
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
				item1: ['a'],
				item2: ['d'],
				item3: ['c'],
				item4: ['d'],
				item5: ['a'],
				item6: ['b'],
				item7: ['d'],
				item8: ['b'],
				item9: ['a'],
				item10: ['c'],
				item11: ['a'],
				item12: ['b'],
				item13: ['c'],
				item14: ['b'],
				item15: ['a'],
				item16: ['d'],
				item17: ['a'],
				item18: ['a'],
				item19: ['c'],
				item20: ['a'],
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