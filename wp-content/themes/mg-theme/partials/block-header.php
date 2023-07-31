<header class="main-header">
  <div class="container">
    <div class="main-header__row">
      <div class="main-header__logo">
        <a href="<?php echo home_url(); ?>" class="logo" title="logo"><?php the_field('logo', 'option'); ?></a>
        <div class="main-header__slogan"><?php the_field('header_slogan', 'option'); ?></div>
      </div>

      <?php if( have_rows('info', 'option') ): $i = 0; ?>
        <?php while( have_rows('info', 'option') ): the_row(); $i++; ?>
          <div class="main-header__info <?php if($i === 2 || $i === 3){ echo 'main-header__white'; } ?>">
            <?php the_sub_field('icon'); ?>
            <?php the_sub_field('text'); ?>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>

      <a href="tel:<?php the_field('phone', 'option'); ?>" class="btn__phone" title="telephone"><span><?php the_field('phone', 'option'); ?></span></a>

      <button class="btn btn-white" title="Заказать звонок"><span>Заказать звонок</span></button>
    </div>
  </div>
</header>