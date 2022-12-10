import Layout from "../components/Layout";

export default function Blog() {
	return (
		<Layout pageTitle="Blog">
			<article className="post mt-5">
				<div className="container">
					<header className="row justify-content-center text-center">
						<div className="col">
							<h1 className="post__title">Treat Yourself Without Worrying About Money</h1>
							<img src="/image-restaurant.jpg" alt="Treat Yourself Without Worrying About Money" className="img-fluid py-5"/>
						</div>
					</header>
					<div className="row post__content justify-content-center mb-5">
						<div className="col-lg-7 col-10">
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur minima ullam fugit non laborum nobis rerum neque tempora itaque reprehenderit deleniti impedit, cupiditate laudantium voluptatibus quaerat sed, voluptate ipsum. Impedit.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis omnis id. Reiciendis dolorem eveniet explicabo soluta modi quas eaque ab quia reprehenderit blanditiis in ipsam architecto quam eum laborum suscipit neque voluptatum nisi maxime quisquam minus labore, quod dicta aliquam. Exercitationem rerum vero quibusdam! Illo aut tenetur adipisci error!</p>
							<h2>Quibusdam veritatis omnis id</h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti atque magni a est corporis aspernatur velit fugiat inventore maxime distinctio sit eveniet aliquam dolore, quo nisi suscipit laboriosam. Corrupti qui veritatis quasi error reiciendis inventore.</p>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	)
}