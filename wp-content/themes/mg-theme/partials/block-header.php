<header class="main-header">
  <div class="container">
    <div class="main-header__row">
      <a href="<?php echo home_url(); ?>" class="logo"><?php the_field('logo', 'option'); ?></a>

      <div class="main-header__slogan"><?php the_field('header_slogan', 'option'); ?></div>

      <?php if( have_rows('info', 'option') ): $i = 0; ?>
        <?php while( have_rows('info', 'option') ): the_row(); $i++; ?>
          <div class="main-header__info <?php if($i === 2 || $i === 3){ echo 'main-header__white'; } ?>">
            <?php the_sub_field('icon'); ?>
            <?php the_sub_field('text'); ?>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>

      <a href="tel:<?php the_field('phone', 'option'); ?>" class="btn__phone"><span><?php the_field('phone', 'option'); ?></span></a>

      <button class="btn btn-white"><span>Заказать звонок</span></button>
    </div>
  </div>
</header>