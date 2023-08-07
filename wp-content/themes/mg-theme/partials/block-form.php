<div class="form__wrap">
  <h6>
    <?php
    if(get_field('products_titleform')){
      the_field('products_titleform');
    } else {
      echo 'Оставьте нам контактные данные и <span>получите вашу персональную скидку:</span>';
    }
    ?>
  </h6>
  <form class="form formAction form_block" method="POST" enctype="multipart/form-data" action="<?php the_permalink(119); ?>">
    <input type="hidden" name="url" value="<?php echo $current_url; ?>">
    <div class="field">
      <label for="name1">Ваше имя</label>
      <input type="text" name="name1" id="name1" placeholder="Например Иван" required />
    </div>
    <div class="field">
      <label for="name">Ваш номер</label>
      <input type="tel" name="phone" id="phone" placeholder="+7 (___) ___-__-__" minlength="18" maxlength="18" required />
    </div>
    <div class="field field-flex">
      <input type="checkbox" name="Agreement" id="success" required>
      <label for="success">Подтверждаю свои данные и даю своё согласие на их обработку.</label>
    </div>
    <button type="submit" class="btn btn-green"><span>Заказать звонок</span></button>
  </form>
</div>