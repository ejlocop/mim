<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Applications of Electromagnetic Induction
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					What is the difference between the generator and a motor?
				</p>

				<strong>
					1. What is a generator?
				</strong>
				<p>
					A generator operates on the principle of electromagnetic induction. A <strong>generator</strong> is a <strong>device that converts mechanical energy to electrical energy</strong>. It consists of a u-shaped magnet that produces magnetic field, and insulated loop of wire. The wire loop is attached to a power source placed between the magnetic poles. The power source slowly begins to rotate the wire clockwise. As the wire loop moves, it cuts through the magnetic lines of force that induce current. As the rotation of the wire loop continues, it moves parallel to the magnetic lines of force. When the wire is in this position, no lines of force are cut, therefore, there is no electricity. As it moves further clockwise, the lines of force are cut again producing electricity. The alternate movement of the wire causes alternating current. A rectifier changes alternating current into direct current.
				</p>

				<div class="card lesson-card">
					<img src="/statics/images/m1l5.jpg" alt="">
					<img src="/statics/images/m1l5-2.jpg" alt="">
					<div class="card-content">
						A moving loop cuts through a magnetic field, which generates current in the wire.
					</div>
				</div>

				<strong>
					Types of Generators
				</strong>
				<ul>
					<li>
						An <strong>a.c.</strong> generator is a rotating loop in a magnetic field which generates current that fluctuates in value and changes direction every half-rotation of the loop. The current produced is called alternating current (a.c.).
					</li>
					<li>
						A simple <strong>d.c.</strong> generator is a rotating loop in a magnetic field which generates current that fluctuates in value but does not change direction.
					</li>
					<li>
						The only difference between the simple a.c. and simple d.c. generator is the commutator used. An a.c. generator makes use of two slip rings while a d.c. generator makes use of a split ring commutator.
					</li>
				</ul>

				<strong>
					2. What is a motor?
				</strong>
				<p>
					One of the most important uses of electromagnetism is in the electric motor. An <strong>electric motor</strong> is a <strong>device that converts electrical energy to mechanical energy</strong>. A motor contains a movable electromagnet. If an alternating current is supplied to the electromagnet, its poles are reversed. Where it was once attracted by the opposite pole of fixed magnet, it will next be repelled. This process is repeated many times each second.
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m1l5-3.jpg" alt="">
					<img src="/statics/images/m1l5-3.jpg" alt="">
					<img src="/statics/images/m1l5-3.jpg" alt="">
					<div class="card-content">
						There are many types of electric motors. Each is designed for a particular purpose or use. They all operate on the principle of electromagnetism.
					</div>
				</div>

				<strong>
					3. What is a transformer?
				</strong>
				<p>
					The alternating current through power lines is at an extremely high voltage. Before alternating current from the power plant can enter your home, its voltage must be decreased. The current must flow through a device called a transformer to decrease the voltage. The transformer regulates the voltage that enters the system. The operation of a transformer operates on the principle of both electromagnetism and electromagnetic induction.
				</p>
				<p>
					A simple transformer is made of two coils of wire called the primary and the secondary coils. These coils are wrapped around an iron core. As an alternating current passes through the primary coil, the iron core becomes an electromagnet. Because the current changes direction many times each second, the magnetic field also changes its direction and induces an alternating current in the secondary coil.
				</p>

				<div class="card lesson-card">
					<div class="card-content">
						<strong class="text-center">
							Schematic Diagram of the Parts of a Transformer
						</strong>
					</div>
					<img src="/statics/images/m1l5-6.jpg" alt="">
				</div>
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