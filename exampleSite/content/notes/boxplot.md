---
title: "Box Plot"
date: 2019-06-28
tags: ["Visualization"]
categories: ["R"]
description: "Drawing box plot in base R"
draft: false
---

# matrix
```
mat <- cbind(Uni05 = (1:100)/21, Norm = rnorm(100),
             `5T` = rt(100, df = 5), Gam2 = rgamma(100, shape = 2))
boxplot(mat) # directly, calling boxplot.matrix()
```

# data.frame
```
df. <- as.data.frame(mat)
par(las = 1) # all axis labels horizontal
boxplot(df., main = "boxplot(*, horizontal = TRUE)", horizontal = TRUE)
```

# formula
```
boxplot(wt ~ cyl, mtcars)
```