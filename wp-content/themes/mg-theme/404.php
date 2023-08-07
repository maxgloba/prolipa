<?php
/*
 * The template for displaying 404 pages (not found)
 */
get_header(); ?>

<section class="page404">
	<div class="container">
		<svg class="page404__num" width="862" height="586" viewBox="0 0 862 586" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M222.5 399.5V453H185V536H127.5V453H3.5V421.5L71.5 186H130L67.5 399.5H128.5L136.5 280H185V399.5H222.5ZM860.195 399.5V453H822.695V536H765.195V453H641.195V421.5L709.195 186H767.695L705.195 399.5H766.195L774.195 280H822.695V399.5H860.195Z" fill="white" fill-opacity="0.1"/><path d="M433.5 455C373.5 455 337 416.5 337 353V198C337 134 373.5 95 433.5 95C494.5 95 531 134 531 198V353C531 416.5 494.5 455 433.5 455ZM433.5 400C460 400 474.5 383.5 474.5 353V198C474.5 167 460 150 433.5 150C407.5 150 393.5 167 393.5 198V353C393.5 383.5 407.5 400 433.5 400Z" fill="white" fill-opacity="0.1"/></svg>
		<img class="page404__img" src="<?php echo IMG; ?>/404-img.png" />
		<div class="page404__text">
			<p>Ой, что-то пошло не так….</p>
			<a href="<?php echo home_url(); ?>" class="btn btn-green"><span>Вернуться на главную</span></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>