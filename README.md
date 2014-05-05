##CSS_ANIMATE
使用jQuery对常用的CSS 3动画效果进行了封装。
使用范例：
    
    $(selector1).click(function(){
      $(this).rotate();    //点击正向旋转180度
    })
    $(selector2).click(function(){
      var opts = {deg: 360};
      $(this).rotate(opts);    //点击正向旋转360度
    })
###Rotate
旋转效果，包括2D旋转、沿x、y轴的3D旋转
####auto_rotate()
触发后自动开始在2D平面上匀速旋转，再次触发则停止
参数：

    {
      direction: "-",  //旋转方向，默认为"+"
      speed: 150       //旋转速度，默认为100
    }
####rotate()
触发后在2D平面上旋转一定的角度，默认为180度。
参数：

    {
      deg: 360,      //旋转的角度，如果为负值则逆时针旋转
      speed: 150     //旋转速度，默认为100
    }
####rotate_x()
触发后在3D空间的x轴上旋转一定的角度，默认为180度，参数同上。
####rotate_y()
触发后在3D空间的y轴上旋转一定的角度，默认为180度，参数同上。
