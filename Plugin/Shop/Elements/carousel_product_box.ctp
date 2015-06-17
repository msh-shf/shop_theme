<?php
$offPrice = $product['Product']['price'] - ($product['Product']['price'] * $product['Product']['off'] / 100);
?>
<div class="owl-item" style="width: 293px;">
    <div class="item">
        <div class="product">
            <div class="image">
                <?php
                $imagePath = '';
                if(!empty($product['Attachment']['path'])){
                    $imagePath = $product['Attachment']['path'];
                }
                if(!empty($imagePath)) {
                ?>
                    <a href="<?php echo Router::url(array("plugin" => "shop", "controller" => "products", "action" => "view", $product['Product']['id'])); ?>">
                        <?php echo $this->Html->image($imagePath, array(
                            'class' => 'img-responsive',
                            'alt' => 'img',
                        )); ?>
                    </a>
                <?php
                }
                if($product['Product']['off']) {
                    ?>
                    <div class="promotion">
                        <span
                            class="discount"><?php echo $product['Product']['off'] ? ($product['Product']['off'] . ' % ' . __d('shop', 'OFF')) : '&nbsp;' ?></span>
                    </div>
                <?php
                }
                ?>
            </div>
            <div class="description">
                <h4><a href="<?php echo Router::url(array("plugin" => "shop", "controller" => "products", "action" => "view", $product['Product']['id'])); ?>"><?php echo $product['Product']['title']; ?></a></h4>
            </div>
            <div class="price">
                <span><?php echo number_format($offPrice); ?></span>
                <?php echo $product['Product']['off'] ? ('<span class="old-price">' . number_format($product['Product']['price']) . '</span>') : ''; ?>
            </div>
            <div class="action-control"> <a href="<?php echo Router::url(array("plugin" => "shop", "controller" => "products", "action" => "view", $product['Product']['id'])); ?>" class="btn btn-primary"> <span class="add2cart"><i class="glyphicon glyphicon-shopping-cart"> </i> <span>افزودن به سبد خرید</span> </span> </a> </div>
        </div>
    </div>
</div>