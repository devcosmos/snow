# Snowflakes

```
<?php 
    $currentDate = new DateTime();
    if (
        ($currentDate->format('m') == '01' && $currentDate->format('d') < 15) ||
        ($currentDate->format('m') == '12' && $currentDate->format('d') > 13)) {
        echo 'new Snow ();';
    }
?>
```