// One of: 'main' | 'mainWithDownloadCancel' | 'mainWithClusteredFeatures' | 'mainWithWmtsLayer' | 'mainWithSld'
const executeMain = 'main';

const mapDescriptions = {
  largeMap: {
    "id": "download309",
    "mobileServerId": "309",
    "title": "lra_wt_geobasis",
    "remark": null,
    "maxChangesetSizeInKb": null,
    "icon": {
      "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExUReLo7tvi6ePp7t7l69Xd5djg5+Hn7eTq7/b4+efr8Sk6rMfT3tHa48zX4RwoeCg5puDn7D1LjvL09yAsghchbyk5nztjvTlIiDRPtu3w8ytCiDFIszdUuMDN2Q+AG0BRlC1AsTBIll/b8Ql0ETWsRz7GM1ib1Cs/ly1BpRKPFkJnv2Th9C1DnjtbuiQykEduwUt1wyxBj1CBsmGmzDhYnic7hLi8vyM3fWjm97K1uTRRmkK54VqVz27r+VOFyBSXF099xixhvD2w3i5swTmg1wt8ETZ/yjWY1SOKLn3NQUVtpiaVNDF3xQhsEEh0q1iNy2DM6TxswquvskbTMz1gn2LU7U3LN1bU7WTVQFCHuEt6sFqdxT92xlOQvXbw+xyvGjqo2zFLos3P0zJSj03L6V+64aKnqjaR0r/DxkFakWGd0tLW2iaqJjCgQMbJzBSHIWGl1hyYJxaiGJyeoJKUlVN8p1+y3TaJzUbC5VnH5w2HDz5lp4rRUARkDBtzI1O+4h99KuH1wUxhmID0/GLD5HLIO0GHzFXYP9ne3GCr2rv9/UKqY9vztReQJon1/JXZVT+eWHLbRlik2ODj4yS6Hq76/C1YrWjNVCuYHJP4/MX7+ziTTIXTRlTLSzFBfXV2eV2Tvz2vVkGS0SWfLIOGiObo6kGnIHTWW6D5/EV/yCzHI8rczi6LQ7foekBqhSx8QTfSK3Db7qzL3TBcfkmd1EOLb1Sv206Pzjx3cert76vmaS+8LbbdsUqx3YHhU0Wm2bfE1DR+Wm6+k1uNssDgvVGyKDFpb53jYNLvoo68waq2zUypdIjPrUO9TV/AMsnskOP10IrjY4bUjChpOZmmw5vecTqvOF7AanmGrqDbiYebuCVqVnK2rGejnHqz0EhRc7Te0J7YsFOJkmOktbTjmOPv4DqDkKzNw9Ts2nTPeI/R0GNuo4TTbEmWjTiHtV5jcOrz6Lzu6UWcqSlNbpW723jT36Ho6G+gvWyygtLuwSRUWdv17Vx3j1WxTV+9x4Soo60vAQoAACAASURBVHjarJdtSFtpFsfvvc998XLvLSHLsFwhHyroDuOwOrXDyuCIX6cfalirTTtrS3fxQ7OdkllQkC2InRTrjowb20GmTKBLGVKacamBthsN0o1h6+1eRw2TcVKSEJtkk9gUdDFa6WL3PE8SY1/tdPdggi9J/r/nf85zzpESdgsGcRwny7KiwJdCMxTFSiYJvpURxcomE6coLC1wCqJoReFoGR6KZIIXwluF3YPa9RUGjqYR4gQRh8CCMoc1WZmmBARknCLTiJNMrIGnWZmVFZmj4XcG4fVidwDE0ogSDGoFCSSzrGoUDQyP8B95hBDLIgEAZETMommFZRCNhP8bAA8G8DSixYqdoYoMKr6XxmoGGr+MoniKgTxxz5yfYV6aDuo1akDmEDjLGSsqjGUCr6QgsfjpDHnmaQ5xLMtKEs0//REijRjEvCmAwOAiZDlWKcsbRVqWPOUwSZAnyApkAOG6eEpMRIokQaEYqDcEECia5ZBAS6IRm6AKisejactLOHxxiHQ6vRaLra15ZBafU0RsAYChBPBIZFiTCQg4hN4UQKBZhG8CYlSV9SxrOgj7AjjiAbeEEeIeq7WmqckaW/NwZft5RFGQHg7fWJ6Dcv4fAKDaaUgCnJyog7yvwOBOa9q9jQZrAxBghiYrMBQ+lOIZBXKjgP2y12g0im8OYIC7xiNP7HJiI0L0SQR8gdOB0+7Tp9PahtUGACQIg4Tw9cVNQWENCBJohNRxuHO8GQBOoxaJHt2XuPfE53bj4wfg5Gl3wF2I0zErcaCmCRA+TkSjmofDfVFVVW9FhaggVYXLBDDP38bXAqAUzf/54qPpaDb867QnnQ5oEa3B1hADBBK/d/9Ws9psxIOmms5IMJj1RzyKUOoZJkWROIbnoD2gnwQAmccdXdb8i7Ozo0+ii6OuMBgfSGpabLCn5+bNhrT7PI7M+fOEoJCGzoQeDgb9mlTsnkZV5SSOgsuEfqIDFAagPZFFp3N21pl75HSFwqFQcuxMLgzVl17ruam5QRzkMxlTzGazjdgKdZBYWtLBBY0rtQ4jiIsCt7NDwWCBzoF2SwElaSDv7OhwWkYt3310Zng4lJzIuXLJmZnNTOxmbDlz4fyF1PlUyh2zDQ5iBkJwWQ/rehDyoJYIkGhUYWzQJUUGId4At3sXAM6TAPerq6s7LBbLOcu5rzFBKAk+jAHAWt/NWCaVSl1IpeKQk0FbQ4O1SJAIJ/VEZ8SvseXubYSWqCjFKoDvoW1S1CsBGHktuugE+clqp8XisJw7EwrlQmGIUCjkmzfke+3xeQBIfXMh1tPVk4hEghHbSIFgaTMZnO70Z6NgAk4EeYiyBNcSQW5p2mQyGPhXA1BS7OEs6Le1dQxYHI4zuZw/ogf1LV0PhybGkhmP3WyPp1ZWvlmRQL+vazCBAQZHIGqaPtYCyWDiiN/1aE2sKCGIikKJMK1gtMiSDL36lQDIY304O9t2HfQhAY6FnD/R17e11dXb26cn5zYDy/b29t7lzMrKCh3r6+3rghhsgELABDUjNbc2Ygk/JljU6FISYFfgBdZ0W4KdhhYp6lUAPIf18fEHICyO4eBWl9l8uL19S1/Ody358ub2qqqqw3lsAWfvhcAEXT09RQKIW7eaE7/pzLoWI3JFYZZDOzbgtcVggHJkXgyA00NWwDXrv3H1gb4Fnz+41Ws+fLiqyqxPzAXsZnN7bS0AVJmxBQTA3lcAwAgjIw0x6Am3mqfrjmZdrtGoUqpDo1ekJZnnOURRLwAAdbxUwZe8Zu38vLqDAACBwxWxt2P9dj00MTGzPJ4fr22shagy55fjcQDCCPYywoauXW5uaak7+M/R0VGXKyoVPQAEQZIRLdP8swAMjzcK2DV55DWKWH+SAEAFYA9yW2Y4cO340sTY2Exc98XHGxsxAjDZ7eZ2s9lst5cIBkesTUci+kZ9fX2U0E9hgooiA7QDGKywOjwNIOLlk+MwBQL9ps4/n5oE9TZggC7gtHwUjIHrjfnk2NzcHDz1r3/4YSNhqGqHOGzeRugZtDa1tjZvRCKR6XemRy2OqancAs6CUSy0JS+UIr2dAg6vURxMTLiVeKWiKIMK+q03rpyaJAXYUf0DtCHH12fCy+PjeR30Z+bG5mb64+PHCAJxASCKANCOsH5rq64ngrnovqwDABZckAXWS1GwF6hGVWLFUgIAgGU52Odh8YTOiGiYmKrqaWr+15XjF8F/i2OgY/KHDtwFhseW8noYpGdmgGGof34dExQQygRY39pEHNCnE0F/NwAAAQAsRmmv6IUBbfQqnLCtT/FQ9aUwwHaNKNHTeuTGp384PlldDdfPAjnA5x++k8yPJ4n+EER/PxAcO1ZCKBDYwX5bEaC1ebqlZbr7YMEBbMFf7qlkMqoiXb4DMCMRxZcCfjTQ7O3LLXB+bAAkH4IkYHh4wpdfTs7NFMQhhvpXv/isSFBLKsGM6w8DFAmaW+rrpnNTQLCwkM3mRm/cJduBV6Vgb94GQAYGr44QxZ+ly/UHPzl+cbKkjwehY+rOxMSYLzlXOPz8PAGYX/2sTFBFDOgZ3LYA9Fvq66eDC1MYwH/fH7x/yET+pVGNiiRsE5RRio7cO3jg24sXr11vgxEE6t9hAxbCyQC2n8iDMiHYzKx/USYAfXIDdgLANazr9i9MTYVgP7nvj+59gEgSvKzMPKu7HXcPHPj7qWvX8A0kDlR3DDidOT2d9s2Vsj+fWV1dja+vK+tfFQkaiQHPAUAK6uq6wYPQf076/VH/2cp7pBfJO4vwmTA9+OPfrsD5r7cNEAD8cDqzS+l03D00VADIrH6JYz21WiIAA4oAPc8BvNOdXXj0wYnfPfSfPVlZeRsDKOxLAegf9x/65Dj4jycQOT9ug45cOO2Luzf7Nwvl//hPEF+uplKZ9a8IQC0GML8AAHJwtDsbenLixLt775/cW/mzs1SFF/rwywD4u/sP/RUbAABgQRtZhAYcztxS2ufGmSc1MP/40iWMsAoOgAXYAJyCHQDWMkA0C8MjfODtt979xXvvVf5qz/ciV54Dz4X84IOT3x6/BgAQA7gRQyOwWEZDySXfZiaTKgKsXCIEkIarJQDigP0FDvgXYHiED7391i8hKt/f8/PbivBUASLDDgO+37v/H59eBIDrBAEgwACLc/ROKDS3mZmfH5oZAh8ePxYfrxKCq1df7MAOgH3BhYIDBQve3/Pjf/k0/5imsiyOU3gF6msLgkop7YSaHQUcHJvYYOo4HbABKmQj2V0lWdbSlA0hKZnAH1MUElwMJZkdBAyhMFASy0SE8ENSEEaCgLu0RgYSZrAwsPPHMrtkHaXZwWhwVnf2nHvfe7Syu6f+AyZ+P/d7zrnnXFANq/b/AGDr9GW55tbWOzwADmOoQbgFoAdfvfrs4cM//B38/9c/AeBztIAC/N8aeHB/yTf4syUlxbpTplVau/fPMNIIya5oUENGrWlPehvNrYIB7/ZjI7pafL7Hg9/iJfzws398LkSwA3ATn7+8B+AEdsH3cA/4vqpOOrni+0KrtQ5510S4Dgmy9AYmIavTWIdTK828A3f6YRxBHTbdg2sQpiBeAT+C87z+p8QACvAbDgDvgSMU4CPahr98sLTk+1lh2fH5npVp9WXNE0yclA0TVBmpmIMJX9bqPbkI0H+HlEF/P97HF8g9jGvIqx9fYv8LAFwGggHuAsANYRQQgPf/tPNkpy6p7vE9n/PN2NjQzc5l2Emk8EzjOl/KcACip1r9xIABAfoRoH9ychIQGgrvwziDInj1suP27dsAQDygBgTXIC7Gn+BCCgAfcCUA99D7aenVbUnVO/cG7zV1mUxO55vXEnijsMJlJEymmf0aq8fbyAH097fagADmQUNhQ+/S4N/+/PJ6R0cHR/Dpbg/QErgIS2Ht7+G9CuvYkd0aBIC09HRV9XdPwEICYHIujs2QrWiPA6tKjTXB02imAK2tNhsSYCPARH/81xfXrl+/TgmAAe8A0BcMIAC1n4D+jSPBAGlph9JV6dUr9wcHB30UwPVmLS5RzPC3ISPi+lBaB22q9MAm0grDsNVs3gVoaOld+uHStWvXKAFBIP6THiQGXEQDau/evbsHAAxIP+dcAgN8TTVAUO9c3IiUyPgSCIM1iBuDeE0ovRSgtRX1bZO4F/6qwdXQ++0PZy5dEgggOqh+iAFE/8beDKTvtMBtxAE4nYXNMxKZlCfg+zFqVafVdeu8UIRAYDabKwnBJDaiq/frr16c4QiwEjqoPD+KwYAS0P8vBiCASlX95L4PgwBgGa4lRsiY2NAxwNQptfEZunUEwKgkADZsRFfvg3+fh4fIKR7hOqjz8iMQsJVfDgEYDykBcOCxrwmiBuTr63t7XRuSOAnDhIyESHWCUhnfrVuHe8BcabD5/aDuR4BJ18oD+ig5dgpdwFq4huq4Co2cGQEEuANKQH8KAUYB4K0MqFTnnjU1wflBnQAUjrHRsYw4dCla1il16AACGHrKZ73NCzebb/qhDVe2py5fxGfZMTThDIEg6rgPjxAHSAVMAcD0jSOjH4yPhwAoFKqNXthqoQcAwAQAzuZH0biWhQyEVR0MawpQWdlpPXmoenMzEJh3vevaniqBQAIO4RQenHuToP4LAKglANPEANTnASADCpVqB9fqGhMQmLrqnb3OBVjNGDZoDIVHMXU6ZbxcnkEAbBMn29rO5ufb3fbt+ZXfnq6qIgTEhGMIQcWPHT52GAHO4y14egoBRoFgHJ7lwRlQqM45TV01Nahuqu+qr3c6L2xIggDCJZEy9UwCZEAujycAeUMAQAhKjdsAIBCgCxSCPshgBIycH0F9OP/UFBgwihn4MCQDUIMmAGhCAOyCQqfTNcbEShm+/+BVyrKPlLAryOWQAoPZXG61WADgbH62PQcAspAgGIHExcP4JX2T1hIDpqdHR4+McgYIPaBQVa/UNNXwAC0t4ICr+ZFMytsvYdTSiMRlLAF04IrB7P9JgwCZCFC6vbKdJRAQhKAouXgZfzDA6wMA6r+VAcWGE/S7SAkSB1xOV+cyPFB5B8Qs82X0WgYAHAAHAGBWqddY2ogFBKAYCXiEXYYSGrVVtadBPytYv48zIA31FRu9AAAE9aQLWxYXXa5frEmFaRgeK2Yj4lYpQMY3ADChOap5j7cgMB8oBgIOoaokNPBbVbw+AgDBh46Pgg1IogBdxAKIQgTwr8JyzBdhVLhUJnqaoZMfAICrCKDVHuUAoBECbmNxMTWBIFSVUIoqQf30VBZ3fjec3wHn76P6aEBSkmKrpkkggCV7cW5hoee1hGGjhN00VsrWcQDr71yxTWg0xIE2UgQ5OTmUgCBQBj7Id+BvsqaLp6eNAOAedzj6+sgyyhuQpJgnAEhADLiwuODvGRJJ2QhhGwwXsft1GQTg+dUrlbM6pUZPHQgEAkjAI1CG4MiC008VC/JuR5ABh4h+0q+xCUw1GM7FxcW5uTm/v2ciMkzGChMRnoQJBAAJcg3lz3V6vWd2ojqzenNsftNOCBCBMOxSZJ2mX4O+cdQI+m63Y7wPgk8AAiQnWeafwRRCfVM9yN+6BQB5E5FxklihE8Ij1N0ZGQcw4uEurJjt1ltzbRNowdnNP24TghCEoCgG941G42iOm/O/76Ng/aTk5KSyFRMCQAUQ/VuTfn/7BDzUo2VSfidgBACwIK+icX39amqnlZbh5tYWTQMiUIjiIPXiYpQ3usn5CUDRiaLdBCQn70vWrzhxDFP7AeCWv7wCAfCXCOTHdJFihuUBwAJvZ15q6pWKCajCTOzEwPz8dmkpLQUj+kAoMIxE3Wh053DyDs5/bg+ABCCAZd7JqRP59vbyvEbiQJyYhVUQKKTqGQFAHq/rfj5sMOR5OID87M2tbXspj0AggmOU6JciAMl/EXd+3oB9+yxjQfKg356X1+hFgGgEgFqMlamFFCBBvO55o21Y08ZbAGG3b333vcPNp0II/BL0S8nxAaAI5QuCCmAfAZhb3FVvN1TwABIxXIciVi2WiUQJuwDggXK9YmDd05aJAGcDYAJsBs6v/+IoJUZQDEEbPg6H3dGXTdJ/ogDPjwVAE4AAzbw8BWjMy8tFgDgxA09jVq2WJUZHlWWQNiQA8nhtNyShwgv6SJCfjwhb2wG743eOUpINxKDhLrXbQd6RTY5Pz0/8FwzYZ7k5d8vW007iSmoqAnzsQQfYGbU6bIaVqZnExKdyDgAGQrz8uNYzUGHoGeIIkAETkR3YDNhJlOIH/ripOspTfbSfOz+nHwMpwAWTAqSmpvbkAcCQNC76SwBgw9TiSNmMOHpVHuxA/HGt0vuxebZNxRNQG7Aasu1COIg8fJOIo/ye88dApAwt2DiCd1JTc2c7mwdyX6slifib5YiwiNioCLU4ek0utAEBOH7UOtwzBP9QpoBAGACC54APEQf5bE6fnD899PwxMcl6b7mtstJADMhdV3o8s8OrapHoESwicAmzEJLo5VAAIHjP03kSZiklCEbIpwg0+qh2UVEBJ/+WPokUi7e8p8JgwAQMdydYy7zfrOHvtsl/+mBlMpYVxakz9gIM62GUKXiEEAakKOK1Ub6Akyf3D9FP5s4fczDmYIrFU25AgvaB50qdtWx9fVkiEkdJosg2ECmSyUTSbq4NqD7mwDPgwWGqyCQEZ/EPx3A2v0j4FBDxgrQCKk/uP0GfxEGIFMtsD+h3zv6k1AHAsFcdFhX0k6oohlXDQpAR4sBRjddrgZ0etsr09EP/Ydz8QhJbtwCeus3jqCeboZxstBG9pAcnyMzQlxgGIZSECV805GCCJKYeK1+KhvCpQwwI9zJckNtN7LyJPYgXe0uCHop5KiLmwDkwF+YlhvswD8Eww7lrre/b/qkzdZZ/Zl7i9/vWWt+397f3dn1w8Pkgegy+ePni5Uv6asUP4uj58Ifbw6cEDAzYo7Vmqtz8pMcNMAjU1F27IhCQX37PzghE/tiY1V6reWLHzidPYseND4PrPiYxCA5I7zAYpKBNWDv9D1rDh4AzLFOtqTeNT06BQO3XL5IuASl0BEyDye87MzA2YDX9ur9fOX7yuOH3V581LgpBAhHvOXxeDHI0tZ6IR347ATT+gdGB0VE4zQI+RCxW+/zuxhVShUx1vjOFKRAzAAZQOdNxLdaM1SreTNXZ/HGpUP/wbP297wfCdwSj4wlwC9+RADvxR8fGx5E/pY/FdDsnPbcMDhOdAlSDgT6rdXi4tu+3GY2pVHnals1e1Av/Og0i8jm8WDwR6R3D7yoA8UfHx8coASCgT6hv8hUSAzQB7o3aAvCnfX0Phk2btmWbcXnJtmbL2KZxw/71w7NBgtIXhyP9Bp7xRylg/GOw+WL8qUtZVwcolFq5WjiZmqLNUbsLUaDv6Sfj2rJtbXnaCAJrsHNc+sffvtaDuOV63I7hTnyfWH9rK/+j45ABLIEeBSbPu/haGT5M8FCZn6LtIUsA9gAZPP3sxSPYss3rXYMM/IiXkJYuCk7Y9g/je5jH09bocfzWPiviu/mTeuQnYpP9mk4BpdxgODE8/A4OB2x/2O4BaOG+ByiwNr3mhchML8OSjpeQLuqeN62RM3gLD+O38tk/YGcFID6sARCehH6yuwJyjVow4N1tOC9kW/S2AChYQQDCywSmQYEuYl0U6vV61fn48Q24FeBWDEgA8kUDDOTHgjG9vmsOSFUGqVKDT3oMXU3p2RaZlYBSYNW/4nSv2WuEGkAKlpeXlqez5aXyxdcqDP9BR1gfoABW324Xxw87TdM4N4g5QSAvdN0lUqkUShU9qncyhdeJKAOTxIe1iPHNLLxGbId2LC99rTEBK40dXywBSKfx25E/DgYmLMF4LOiM6c+7b5Ope3vwMSt8wiOPKXjUUQP76BnwzbOzjL9mNHtt03BMZRaQiyVLbRibjvNZ2PEFMWrHwdMSaIqN0ysYTOjzXS3Yc4g3taVwQBSUD895CqaATzmwf8rA+Dc2NsxmcIAyYAqwJ/EbFGzZpWKUNX0fr72V0yFMdk4nA9N4DAoQvJkAyIBM2gOHZJVGrpVgCiYfPWqnAPaqa+YNilnIgxd9sCfRgiWiGbX29bXp3Xy7SPd4PDH4DkIFbiSgR63S4IUCqUImCEMneijUFPYAa0OT6fM/bd5Xs1wBksDeXiOlAj6ZWjRqtd6mt+EmE9A9I2DgCfqCntiNBPRoVbBPBwOlWqN8qLzSjYz043TBpoW/dTbL2c1X3EBsBfzg6gSRmWk2Gx5nNEoaiI/iKxo1RT34ITjgnR7niDPo8wVjVzcPA0oNCOBTQ2o5TITD/n4woBjByFf92ZkOg1mzOCFYP2SMGeNMpVivJpxk8SaKeBOy7R4eTowElB/4Tuet46BgMMgUWolcIxzgQzaXkIIOA2e+AQavIDZaSaAPq4MR+PhVTqWKdVyZggiDwXv4m/BBgEP4AoGg51Jy62714aGglWtggzZ0cHAwJOR1ogAZ5BNNP6agbYBhZpkw8si8xsiWy6lC9bjm9JCBx9lJB3444Av6DLdvV0sEOC1WwwFBkOFDLidUBF1/v4kbVCvcAOowKxqQgBGSwNLwOgPxOgvh91eCTpZ1DMZeh3cgnAusB89v3zVWKKVwLJb1CoLacIAL8qWOG4htACdkm9xgdoONnzkwPBQhk2kJZLMVKoPzDdDXg+sQPnwFwo6wL3gp/7M71nA+oJBKlQdyqAIYCFfUBjqxCvk8FoEZkIKZDMysCzJMQKxBNlturot4BqcIOByOgM+h6rkjpFqJCvfM3x2OUBu0DagIbQVxKrD0t/CvKQPlVHUdE98B9+HwHZCAwEnPnSHthc2SgNeNdWig04kK+QYYkAJJEJwOTYzPe5C1QKqxToFYMcJhRyjkCATOZfcIwNm5Bp+EFrANEjwFIJCoNv0tA/jeNHppAvAeyFAKkF5OWeo+H9JbaAxHaDcUCgfeyXu1vb13KigkakEhGFSGK11/oiMH+UbRXy6TghhA3jSKLcj5qVSh7gtwelgMRyiyGwk5wtcqfD69SwEW4D97lgN/o3CFORjRcQXMQapMCigB35kZHDj+P7OJ/e/3+1MWS+lDINwxcIcjBLmP7O5iAo4OBUFgCh0PL8hulwEmhVQqVTEDTAI6QCM2inAK5J/Zn6nsz4jxembGP+NHeArwFkshF+Z0YPMAPCQgdHTuXlzY6lKQ9kK5Dd9+nKfbIAFlSF3AilupVMBiJgt8aIws8ssMbymdsqGHWnQY/Ty8IqHdE5fr0HWY3BLkLQNpj0al+ebE7IUc6EYSCWYAColEtQ6MUgEV/JQAv5+N3sLwpdJHR8fgI5HI7jxFJHR9kk4vpF2udDKpRgU0gJ5XqRXKb3ek5moHDTqSUK2Xtre3S4VCseiv+DtSz/Cl7ZyD4yMRhp+YmAB+5Nq9uLiYTqcXXYsLySQ3UGgFg1px15SA2QiToZ2EkXy9gAbb24WCJUVxYWnzt7c/OhxtPtFJYP7a7XK5wGAhfR53kYEM+PhzqDsFYMfwTteVhESjUCwUSKBA/C78qcjvxCP/nZsLpNNzcbc7ndySC4JMqlap1ZK78L1a2LPndygJLAuJarGIBuRgAfxFC396yvgO4rfwKHA+5yYDcEi73YuQg4WkwaCWazRKpfTOBMgEVXLxaqetAAKVSrFAVShZOP9tqXT68f37XK7F32X43yZ+Av51fG6O+HNx+HfOveiG+XByqFIZVBLpPSuzTJXcSi5eQhmYAsyDyj4zOD0lA8tby9u3pVOgB3LhHDUgbz2K/8xPvAM+ZcCN/5lzu7AbDQZog9aTG98WkKiEvyfTrpUvmARohUS+ug9RYX1AAsDfBn4AV1/k47zn/J+Bfx2Pcy4KoAd2wkJyC6aBQiG9X0Dyy9aCa25l73dWh3y1iQb71AnYhhas/kfiQwWOjnDVm5+45tW//mMlTgZIhgq4+FxYwGmg7e25LxQyEMAUzK2s/psp5JtnZ5SESrHI+hHKn6MAPONfQ99j7//3jxWIOC8BdgCfCgtJvER6vwAcGSUHB79sMYM9Ukgcn2Hss0pAM2D5j4CeOwKByBEtvLj0zR9drq6ucoE4JoI6kfGTwJf9hQQImqGHQ9wgLip8PjvjDs16/T00/xEbP/BDYEArYOToaG9vVRRYiZMGjR/wCxq1wH4YeF9oBQF/HnUAVVhY5Ar/+33n02dy2G80vhD6KsdLwBdBRy73ZW+PBIgfX11lo+flT+LvXP5KB0jVwhBsVMgAkiAqoMP/K7diHLdhICiKZGSDXMBQE7DQNwLkCy5SBHlBDjjgYOAaXz5wlXv1UWO3blKxU+06/T3BhVsXmV1Sig+H5KQtDBuwPcMhuVxSnJ+Xy+XXw7PEev0sBciPL1wJrK/Xa9fd4m+fch7I8LIU6Q8TBCjJ1MmRkChAhc/4O+FwfnlBcrj7eCchGeLbw/F4PJ+7TvD/9v/X+/uh70f4Cc1PCsSBQaaQZXjaCwmmMQZ/fIvO8/4Tkt+AnuEn4RelMcs6uzKEwsABM2orLPbdq9gn5VPHS+5J7X6UJXjD6DPgUS2kLkgi5MEADkKCWSQaY2wz8tjjudm73Q5ZP6NPhxcC9sbjGozTicOhhRJgITQkONNwrkkjXVbdDN22LX6wITMXPZ2c6Nx4ecJJfWNWofQaO2hhATG+j/E4vNkMwGBp2wO+GqNznPdmoqMa8KM7qV6YRvn+d688xCzYopC02FlmchMHbrGEbk4Oeyxlq0CNL8pidvAsyA41U9vTqfHekTHYx+tVDGEZQ6wiXgKfKqQIEjFit+2dI2WcQ9URA9+ZnMGADTdsS3S902x6QfmkCBVMwcYMje40uliWhrySEaJJc2IPox+ZbUrWGssXpLyGZouK5BBqass1Q6ygNkDJOQhZeGcjqidxcFdaaTnSaKiq5fGvJ+9JMYOABYyIL+yK6bgU47pfvrq19i5+gVnTk6KT+1fHrbRvewypewAAAB5JREFUGoWimjfzC0vYR6HA1Vg3FDi/ERsi/HcM/AEcz5WIXR9NYAAAAABJRU5ErkJggg==",
      "width": 128, "height": 128
    },
    "isViewable": false,
    "isDeletable": false,
    "isDownloadable": true,
    "hasUpdate": true,
    "srs": "EPSG:25832",
    "created": null,
    "size": 3621531648,
    "mobileServerCreated": 1682321443016,
    "sharedBy": "lubw",
    "_rawDownloadableDesc": {
      "id": "309",
      "created": 1682321443016,
      "size": 3536652,
      "srs": "EPSG:25832",
      "extent": {
        "maxx": 472040.80212248757,
        "minx": 415158.4058289527,
        "maxy": 5301003.586426297,
        "miny": 5266121.525927289,
        "srs": null
      },
      "description": "lra_wt_geobasis",
      "properties": {
        "correlationid": "40a85cc3-a1de-4764-a6b8-07e99c61b304",
        "isBackground": "true"
      },
      "name": "lra_wt_geobasis",
      "cmmapVersion": "5.0.0",
      "sharedBy": "lubw"
    },
    "hasPendingDownload": false
  },
  wmtsBase: {
    "id": "test",
    "baseURI": '',
    "readFromMapModFile": false,
    "mapConfiguration": {
      "id": "test",
      "general": {
        "boundingBox": {
          "srs": "EPSG:25832",
          "minx": -20037508.34,
          "miny": -20037508.34,
          "maxx": 20037508.34,
          "maxy": 20037508.34
        },
        "title": "Test Map",
        "abstract": "OpenStreetMap",
        "extension": {
          "autoGeolocate": true,
          "maxExtent": {
            "minx": -20037508.34,
            "miny": -20037508.34,
            "maxx": 20037508.34,
            "maxy": 20037508.34
          },
          "maxResolution": 156543.033928041,
          "resolutions": [
            156543.033928041,
            78271.5169640204,
            39135.7584820102,
            19567.8792410051,
            9783.93962050255,
            4891.96981025128,
            2445.98490512564, 1222.99245256282, 611.496226281409, 305.748113140705, 152.874056570352, 76.4370282851762, 38.2185141425881, 19.109257071294, 9.55462853564702, 4.77731426782351, 2.38865713391176, 1.19432856695588, 0.597164283477939
          ],
          "cmmapVersion": "1.1.0"
        }
      }, "layerList": {
        "layer": [
          {
            "id": "test",
            "queryable": false,
            "utfgrid": false,
            "hidden": false,
            "server": {
              "service": "OGC:WMTS",
              "onlineResource": {
                "href": "https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml"
              }
            },
            "legend": {
              "thumbnail": {
                "onlineResource": {
                  "href": "legend.png"
                },
                "width": 22,
                "height": 28,
                "format": "image/png"
              }
            },
            "name": "web",
            "title": "TopPlusOpen",
            "formatList": {
              "format": [{
                "value": "image/png",
                "current": true
              }]
            },
            "styleList": {
              "style": [{
                "name": "default",
                "title": "Default",
                "current": true
              }]
            },
            "extension": {
              "requestEncoding": "REST",
              "isBaseLayer": false,
              "matrixSet": "EU_EPSG_25832_TOPPLUS",
              // "matrixSet": "WEBMERCATOR",
              "serverResolutions": [
                156543.033928041,
                78271.5169640204,
                39135.7584820102,
                19567.8792410051,
                9783.93962050255,
                4891.96981025128,
                2445.98490512564,
                1222.99245256282,
                611.496226281409,
                305.748113140705,
                152.874056570352,
                76.4370282851762,
                38.2185141425881,
                19.109257071294,
                9.55462853564702,
                4.77731426782351,
                2.38865713391176,
                1.19432856695588,
                0.597164283477939
              ],
              "matrixIds": [
                "00",
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18"
              ],
              "editable": false,
              "geometryEditable": false,
              "sphericalMercator": false,
              "wrapDateLine": false
            }
          }
        ]
      }
    }
  },
  osm: {
    "id": "test",
    "baseURI": '',
    "readFromMapModFile": false,
    "mapConfiguration": {
      "id": "osm",
      "general": {
        "boundingBox": {
          "srs": "EPSG:900913",
          "minx": -20037508.34,
          "miny": -20037508.34,
          "maxx": 20037508.34,
          "maxy": 20037508.34
        },
        "title": "OSM",
        "abstract": "OpenStreetMap",
        "extension": {
          "autoGeolocate": true,
          "maxExtent": {
            "minx": -20037508.34,
            "miny": -20037508.34,
            "maxx": 20037508.34,
            "maxy": 20037508.34
          },
          "maxResolution": 156543.033928041000000,
          "resolutions": [
            156543.033928041000000,
            78271.516964020400000,
            39135.758482010200000,
            19567.879241005100000,
            9783.939620502550000,
            4891.969810251280000,
            2445.984905125640000,
            1222.992452562820000,
            611.496226281409000,
            305.748113140705000,
            152.874056570352000,
            76.437028285176200,
            38.218514142588100,
            19.109257071294000,
            9.554628535647020,
            4.777314267823510,
            2.388657133911760,
            1.194328566955880,
            0.597164283477939
          ],
          "cmmapVersion": "1.1.0"
        }
      },
      "layerList": {
        "layer": [{
          "id": "osm",
          "hidden": false,
          "server": {
            "service": "OL:XYZ",
            "onlineResource": {
              "href": "https://tile.openstreetmap.org/${z}/${x}/${y}.png"
            }
          },
          "name": "tile.openstreetmap.org",
          "title": "OpenStreetMap",
          "extension": {
            "sphericalMercator": true,
            "wrapDateLine": true
          }
        }]
      }
    }
  }
}

const layerConfigurationItems = {
  wmts: {
    id: 'test_layer',
    baseURI: null,
    mapId: 'test',
    layerConfiguration: {
      "id": "test",
      "queryable": false,
      "utfgrid": false,
      "hidden": false,
      "server": {
        "service": "OGC:WMTS",
        "onlineResource": {
          "href": "https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml"
        }
      },
      "legend": {
        "thumbnail": {
          "onlineResource": {
            "href": "legend.png"
          },
          "width": 22,
          "height": 28,
          "format": "image/png"
        }
      },
      "name": "web",
      "title": "TopPlusOpen",
      "formatList": {
        "format": [{
          "value": "image/png",
          "current": true
        }]
      },
      "styleList": {
        "style": [{
          "name": "default",
          "title": "Default",
          "current": true
        }]
      },
      "extension": {
        "requestEncoding": "REST",
        "isBaseLayer": false,
        "matrixSet": "EU_EPSG_25832_TOPPLUS",
        // "matrixSet": "WEBMERCATOR",
        "serverResolutions": [
          156543.033928041,
          78271.5169640204,
          39135.7584820102,
          19567.8792410051,
          9783.93962050255,
          4891.96981025128,
          2445.98490512564,
          1222.99245256282,
          611.496226281409,
          305.748113140705,
          152.874056570352,
          76.4370282851762,
          38.2185141425881,
          19.109257071294,
          9.55462853564702,
          4.77731426782351,
          2.38865713391176,
          1.19432856695588,
          0.597164283477939
        ],
        "matrixIds": [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18"
        ],
        "editable": false,
        "geometryEditable": false,
        "sphericalMercator": false,
        "wrapDateLine": false
      }
    }
  },
  feature: {
    id: 'test_feature',
    baseURI: null,
    mapId: 'test',
    layerConfiguration: {
      "id": "test_feature",
      "queryable": true,
      "utfgrid": false,
      "hidden": false,
      "server": {
        "service": "GTM:VECTOR",
        "version": "1.0.0",
        "onlineResource": {
          "href": ""
        }
      },
      "legend": {
        "thumbnail": {
          "onlineResource": {
            "href": "legend.png"
          },
          "width": 14,
          "height": 20,
          "format": "image/png"
        }
      },
      "name": "test_feature",
      "title": "test_feature",
      "formatList": {},
      "styleList": {
        "style": [
          {
            "name": "default",
            "title": "Default",
            "current": true
          }
        ]
      },
      "extension": {
        "requestEncoding": "REST",
        "isBaseLayer": false,
        "matrixSet": "generated",
        "serverResolutions": [152.87405657035254, 76.43702828517627, 38.218514142588134],
        "matrixIds": ["s0", "s1", "s2"],
        "editable": true,
        "geometryEditable": true,
        "sphericalMercator": false,
        "wrapDateLine": false
      }
    }
  }
}

const sldStrings = {
  cluster: `
<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
    <sld:NamedLayer>
        <sld:Name>default</sld:Name>
        <sld:UserStyle>
            <sld:Name>default</sld:Name>
            <sld:Title>default</sld:Title>
            <sld:FeatureTypeStyle>
                <sld:Name>name</sld:Name>
                <sld:Rule>
                    <sld:PointSymbolizer>
                        <sld:Graphic>
                            <sld:Mark>
                                <sld:Fill>
                                    <sld:CssParameter name="fill">#FF0000</sld:CssParameter>
                                </sld:Fill>
                                <sld:Stroke/>
                            </sld:Mark>
                            <sld:Opacity>0.0</sld:Opacity>
                            <sld:Size>10.0</sld:Size>
                        </sld:Graphic>
                    </sld:PointSymbolizer>
                </sld:Rule>
            </sld:FeatureTypeStyle>
        </sld:UserStyle>
    </sld:NamedLayer>
</sld:StyledLayerDescriptor>`,
  default: `
<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
    <sld:NamedLayer>
        <sld:Name>default</sld:Name>
        <sld:UserStyle>
            <sld:Name>default</sld:Name>
            <sld:Title>default</sld:Title>
            <sld:FeatureTypeStyle>
                <sld:Name>name</sld:Name>

                <sld:Rule>
                    <ogc:Filter>
                      <ogc:PropertyIsEqualTo>
                        <ogc:Function name="geometryType">
                          <ogc:PropertyName>geometry</ogc:PropertyName>
                        </ogc:Function>
                        <ogc:Literal>Point</ogc:Literal>
                      </ogc:PropertyIsEqualTo>
                    </ogc:Filter>                    

                    <sld:PointSymbolizer>
                        <sld:Graphic>
                            <sld:Mark>
                                <sld:Fill>
                                    <sld:CssParameter name="fill">#16DD90</sld:CssParameter>
                                </sld:Fill>
                                <sld:Stroke/>
                            </sld:Mark>
                            <sld:Opacity>0.0</sld:Opacity>
                            <sld:Size>10.0</sld:Size>
                        </sld:Graphic>
                    </sld:PointSymbolizer>
                </sld:Rule>

                <sld:Rule>
                    <ogc:Filter>
                      <ogc:PropertyIsEqualTo>
                        <ogc:Function name="geometryType">
                          <ogc:PropertyName>geometry</ogc:PropertyName>
                        </ogc:Function>
                        <ogc:Literal>LineString</ogc:Literal>
                      </ogc:PropertyIsEqualTo>
                    </ogc:Filter>                    

                    <sld:LineSymbolizer>
                        <sld:Stroke>
                            <sld:CssParameter name="stroke">#16DD90</sld:CssParameter>
                            <sld:CssParameter name="stroke-width">2.0</sld:CssParameter>
                        </sld:Stroke>
                    </sld:LineSymbolizer>
                </sld:Rule>

                <sld:Rule>
                    <ogc:Filter>
                      <ogc:PropertyIsEqualTo>
                        <ogc:Function name="geometryType">
                          <ogc:PropertyName>geometry</ogc:PropertyName>
                        </ogc:Function>
                        <ogc:Literal>Polygon</ogc:Literal>
                      </ogc:PropertyIsEqualTo>
                    </ogc:Filter>                    

                    <sld:PolygonSymbolizer>
                        <sld:Fill>
                            <sld:CssParameter name="fill">#16DD90</sld:CssParameter>
                            <sld:CssParameter name="fill-opacity">1.0</sld:CssParameter>
                        </sld:Fill>
                        <sld:Stroke>
                            <sld:CssParameter name="stroke">#808080</sld:CssParameter>
                            <sld:CssParameter name="stroke-linecap">butt</sld:CssParameter>
                            <sld:CssParameter name="stroke-linejoin">miter</sld:CssParameter>
                            <sld:CssParameter name="stroke-opacity">1.0</sld:CssParameter>
                            <sld:CssParameter name="stroke-width">1.0</sld:CssParameter>
                            <sld:CssParameter name="stroke-dashoffset">0.0</sld:CssParameter>
                        </sld:Stroke>
                    </sld:PolygonSymbolizer>
                </sld:Rule>

            </sld:FeatureTypeStyle>
        </sld:UserStyle>
    </sld:NamedLayer>
</sld:StyledLayerDescriptor>`
}

const startEditGeometry = (options) => {

  const map = options.map;
  const onGeometryChanged = options.onGeometryChanged;

  const drawOptions = {
    type: 'Point',
  };

  const editGeometryLayer = map.getEditGeometryLayer();

  editGeometryLayer.setValidGeometryTypes(['Point', 'LineString', 'Polygon']);
  editGeometryLayer.startDrawing(drawOptions);
  editGeometryLayer.onGeometryChanged(onGeometryChanged);
};

const redoGeometry = (options) => {

  const map = options.map;

  const editGeometryLayer = map.getEditGeometryLayer();
  editGeometryLayer.redo();
}

const cancelEditGeometry = (options) => {

  const map = options.map;

  const editGeometryLayer = map.getEditGeometryLayer();
  editGeometryLayer.stopDrawing();
}

const undoGeometry = (options) => {

  const map = options.map;

  const editGeometryLayer = map.getEditGeometryLayer();
  editGeometryLayer.undo();
}

const setNextGeometryType = (options) => {

  const map = options.map;

  const editGeometryLayer = map.getEditGeometryLayer();
  editGeometryLayer.setNextGeometryType();
}

const endEditAndAddToSource = (options) => {

  const map = options.map;
  const source = options.source;

  const editGeometryLayer = map.getEditGeometryLayer();

  const olFeature = editGeometryLayer.getOlEditFeature();
  cancelEditGeometry({
    map: map
  });

  const gtmFeature = GTM.GtmFeature.fromOlFeature(olFeature);

  if (source.layer?.layerConfiguration?.id === 'NOTES') {
    gtmFeature.properties.NOTESTYLE = 'orange';
  }

  source.addFeature(gtmFeature.toOpenLayersFeature());
}

const getSldFunctionFromSldString = (sldString) => {
  const sldService = new window.CadenzaMaps.service.sld();
  return sldService.getStyleFunctionFromSldString({
    sldString
  });
}

const setUpButtons = async (options) => {
  const map = options.map;
  const featureSource = options.featureSource;

  const buttonElements = {
    btnDraw: document.getElementById('btn_draw'),
    btnCancel: document.getElementById('btn_cancel'),
    btnUndo: document.getElementById('btn_undo'),
    btnRedo: document.getElementById('btn_redo'),
    btnSetNextGeoType: document.getElementById('btn_type'),
    btnSaveGeo: document.getElementById('btn_save'),
    btnLayers: document.getElementById('btn_layers'),
    btnPlus: document.getElementById('btn_plus'),
    btnMinus: document.getElementById('btn_minus')
  };

  const setGeoEditButtonStates = (options) => {
    const isEdit = options.isEdit;

    buttonElements.btnDraw.classList.toggle('hidden', isEdit);
    buttonElements.btnCancel.classList.toggle('hidden', !isEdit);
    buttonElements.btnUndo.classList.toggle('hidden', !isEdit);
    buttonElements.btnRedo.classList.toggle('hidden', !isEdit);
    buttonElements.btnSetNextGeoType.classList.toggle('hidden', !isEdit);
    buttonElements.btnSaveGeo.classList.toggle('hidden', !isEdit);
    buttonElements.btnLayers.classList.toggle('hidden', isEdit);
  }

  buttonElements.btnDraw.addEventListener('click', () => {
    hideLayerSwitcher();
    setGeoEditButtonStates({ isEdit: true })
    startEditGeometry({
      map: map,
      onGeometryChanged: (geometryChangedWatchedData) => {
        console.log(geometryChangedWatchedData);
      }
    });
  })

  buttonElements.btnCancel.addEventListener('click', () => {
    setGeoEditButtonStates({ isEdit: false });
    cancelEditGeometry({
      map: map
    });
  })

  buttonElements.btnUndo.addEventListener('click', () => {
    undoGeometry({
      map: map
    });
  })

  buttonElements.btnRedo.addEventListener('click', () => {
    redoGeometry({
      map: map
    });
  })

  buttonElements.btnSetNextGeoType.addEventListener('click', () => {
    setNextGeometryType({
      map: map
    });
  })

  buttonElements.btnSaveGeo.addEventListener('click', () => {
    setGeoEditButtonStates({ isEdit: false });
    endEditAndAddToSource({
      map: map,
      source: featureSource
    });
  })

  buttonElements.btnPlus.addEventListener('click', () => {
    const view = map.getView();
    view.animate({ zoom: view.getZoom() + 1 });
  })

  buttonElements.btnMinus.addEventListener('click', () => {
    const view = map.getView();
    view.animate({ zoom: view.getZoom() - 1 });
  })

  setUpLayerSwitcher({
    map
  });
}

const hideLayerSwitcher = () => {
  const popover = document.querySelector('.popover');
  popover.style.display = 'none';
}

const setUpLayerSwitcher = (options) => {
  const map = options.map;

  const allLayers = map.getAllLayers().toReversed();
  let switcherLayerData = allLayers
    .filter(layer => layer.displayInLayerSwitcher)
    .map(it => ({
      layer: it,
      visible: true
    }));

  const popoverButton = document.getElementById('btn_layers');
  const popover = document.querySelector('.popover');

  // Toggle the popover visibility
  popoverButton.addEventListener('click', () => {
    popover.style.display = popover.style.display === 'flex' ? 'none' : 'flex';
  });

  let draggedItem = null;
  let initialIndex = null;

  function onTouchStart(e, index) {
    draggedItem = switcherLayerData[index];
    initialIndex = index;
    const touch = e.touches[0];
    const target = e.target.closest('.popover-item');
    target.classList.add('dragging');
    target.setAttribute('data-touch-id', touch.identifier);
  }

  function onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.querySelector(`.popover-item[data-touch-id='${touch.identifier}']`);

    if (target) {
      const elements = [...popover.children];
      const overIndex = elements.findIndex(el => {
        const rect = el.getBoundingClientRect();
        return touch.clientY > rect.top && touch.clientY < rect.bottom;
      });

      elements.forEach(el => el.classList.remove('drop-target'));
      if (overIndex !== -1 && overIndex !== initialIndex) {
        elements[overIndex].classList.add('drop-target');
      }
    }
  }

  function onTouchEnd(e) {
    const touch = e.changedTouches[0];
    const target = document.querySelector(`.popover-item[data-touch-id='${touch.identifier}']`);

    if (target) {
      const elements = [...popover.children];
      const overIndex = elements.findIndex(el => {
        const rect = el.getBoundingClientRect();
        return touch.clientY > rect.top && touch.clientY < rect.bottom;
      });

      target.classList.remove('dragging');
      target.removeAttribute('data-touch-id');
      elements.forEach(el => el.classList.remove('drop-target'));

      if (overIndex !== -1 && overIndex !== initialIndex) {
        /************ This is the relevant CadenzaMaps part. The rest is just UI implementation. ***********/
        const movedLayer = draggedItem.layer;
        const toId = switcherLayerData[overIndex].layer.layerConfiguration.id;
        const newIndex = map.getAllLayers().findIndex(it => it.layerConfiguration?.id === toId);

        map.setLayerIndex(movedLayer, newIndex);
        /***************************************************************************************************/

        switcherLayerData.splice(initialIndex, 1);
        switcherLayerData.splice(overIndex, 0, draggedItem);
        populatePopover(switcherLayerData);
      }
    }

    draggedItem = null;
    initialIndex = null;
  }

  const populatePopover = (items) => {

    // Populate the popover with items
    popover.innerHTML = ''; // Clear existing items
    items.forEach((switcherData, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('popover-item');
      itemDiv.draggable = true;

      const dragHandle = document.createElement('span');
      dragHandle.classList.add('material-icons', 'drag-handle');
      dragHandle.textContent = 'drag_handle';

      const label = document.createElement('span');
      label.textContent = switcherData.layer.layerConfiguration.title;

      const toggle = document.createElement('div');
      toggle.classList.add('toggle');
      if (switcherData.visible) {
        toggle.classList.add('active');
      }

      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        switcherData.visible = !switcherData.visible;
        switcherData.layer.setVisible(switcherData.visible);
      });

      itemDiv.appendChild(dragHandle);
      itemDiv.appendChild(label);
      itemDiv.appendChild(toggle);

      itemDiv.addEventListener('touchstart', (evt) => onTouchStart(evt, index));
      itemDiv.addEventListener('touchmove', (evt) => onTouchMove(evt));
      itemDiv.addEventListener('touchend', (evt) => onTouchEnd(evt));

      popover.appendChild(itemDiv);
    });
  }

  populatePopover(switcherLayerData);
}

/**
 * Get map configuration by id
 * @desc Get all downloadable map via "mapRepository.getDownloadableMaps()" and find id
 * @param mapRepository
 * @param id
 * @returns {Promise<*>}
 */
const getMapConfigurationById = async (mapRepository, id) => {
  const maps = await mapRepository.getDownloadableMaps();
  // const m = maps.filter(map => map.title.includes('Rettungstreffpunkte')); // 'Herzog'
  const mapConfig = maps.find(map => map.id === id);
  return mapConfig
}


const setUpCadenzaMapsAndGetMapFactory = async () => {

  const _cadenzaStore = new CadenzaMaps.CadenzaStore({
    mobileAppDataPath: '/',
    mobileServerUrl: `${CMS_BASE_URL}/cadenza-mobile-server/MobileDataService`,
    mobileServerAccount: CMS_ACCOUNT_KEY,
    mobileServerPassword: CMS_ACCOUNT_PW,
    bundleIdentifier: 'net.disy.cadenza.mobile.app',
    appVersion: '3.6.0',
    invalidAppVersionErrorHandler: () => { },
    mapServerUrl: '',
    spatialiteServerUrl: ''
  });

  const mapRepository = new CadenzaMaps.MapRepository(_cadenzaStore)

  // NOTE: Get the map configuration for "DOWNLOADABLE_MAP_ID"
  // const mapConfig = await getMapConfigurationById(mapRepository, DOWNLOADABLE_MAP_ID);
  // console.log(mapConfig);

  const _mapViewFactory = new CadenzaMaps.MapViewFactory(mapRepository, {
  });

  await _mapViewFactory.ready();

  const client = _cadenzaStore.getGtmMobileServerClient();
  const mapFactory = _mapViewFactory.getGtmMapFactory();
  const mapViewFactory = _mapViewFactory;

  const mapView = mapViewFactory.createMapView({
    targetElement: 'map'
  });

  return mapFactory;
}

const main = async () => {

  const mapFactory = await setUpCadenzaMapsAndGetMapFactory();
  const map = await mapFactory.create(mapDescriptions.osm, 'map');

  setUpButtons({
    map: map,
    featureSource: map
      .getAllLayers()
      .find(it => it.layerConfiguration?.id === 'NOTES')
      .getSource()
  });
}

const mainWithClusteredFeatures = async () => {

  const mapFactory = await setUpCadenzaMapsAndGetMapFactory();
  const map = await mapFactory.create(mapDescriptions.osm, 'map');

  const featureLayerFactory = new window.CadenzaMaps.layer.factory.feature();
  const featureClusterOptions = {
    distance: 20,
    threshold: 3
  };

  const clusterStyleFunction = await getSldFunctionFromSldString(sldStrings.cluster);
  const defaultStyleFunction = await getSldFunctionFromSldString(sldStrings.default);

  const clusteredFeatureLayer = await featureLayerFactory.create({
    mapConfigurationItem: mapDescriptions.osm,
    layerConfigurationItem: layerConfigurationItems.feature,
    hostingMap: map,
    featureClusterOptions: featureClusterOptions,
    defaultStyleFunction: defaultStyleFunction,
    clusterStyleFunction: clusterStyleFunction
  });

  map.addLayer(clusteredFeatureLayer);

  setUpButtons({
    map: map,
    featureSource: clusteredFeatureLayer.getSource().getSource() // Add to ClusterSource's source
  });
}

const mainWithDownloadCancel = async () => {

  const mapFactory = await setUpCadenzaMapsAndGetMapFactory();
  const map = await mapFactory.create(mapDescriptions.osm, 'map');

  setUpButtons({
    map: map,
    featureSource: map
      .getAllLayers()
      .find(it => it.layerConfiguration?.id === 'NOTES')
      .getSource()
  });

  setTimeout(() => {
    let updateCount = 0;
    const onProgress = () => {
      console.log('onProgress', updateCount);
      updateCount++;
    };

    mapRepository.downloadMap(mapDescriptions.largeMap, onProgress, {
      deleteExisting: false,
      keepLocalChanges: false
    }).then(() => {
      console.log('download successful');
    }).catch((e) => {
      if (e.isCancelled) {
        console.info('Cancel successful');
      } else {
        throw e;
      }
    });
  }, 10000);

  setTimeout(() => {
    client.abortFileTransferByMapId(DOWNLOADABLE_MAP_ID);
  }, 11000);
}

const mainWithWmtsLayer = async () => {

  const mapFactory = await setUpCadenzaMapsAndGetMapFactory();
  const map = await mapFactory.create(mapDescriptions.wmtsBase, 'map');

  const wmtsLayerFactory = new window.CadenzaMaps.layer.factory.wmts();
  const wmtsLayer = await wmtsLayerFactory.create({
    mapConfigurationItem: mapDescriptions.wmtsBase,
    layerConfigurationItem: layerConfigurationItems.wmts,
    hostingMap: map
  });

  map.addLayer(wmtsLayer);

  setUpButtons({
    map: map,
    featureSource: map
      .getAllLayers()
      .find(it => it.layerConfiguration?.id === 'NOTES')
      .getSource()
  });
}

const mainWithSld = async () => {

  const mapFactory = await setUpCadenzaMapsAndGetMapFactory();
  const map = await mapFactory.create(mapDescriptions.osm, 'map');

  const featureLayerFactory = new window.CadenzaMaps.layer.factory.feature();
  const styledFeatureLayer = await featureLayerFactory.create({
    mapConfigurationItem: mapDescriptions.osm,
    layerConfigurationItem: layerConfigurationItems.feature,
    hostingMap: map
  });

  const style = await getSldFunctionFromSldString(sldStrings.default);
  styledFeatureLayer.setStyle(style);

  map.addLayer(styledFeatureLayer);

  setUpButtons({
    map: map,
    featureSource: styledFeatureLayer.getSource()
  });
}

switch (executeMain) {
  case 'main':
    main();
    break;
  case 'mainWithDownloadCancel':
    mainWithDownloadCancel();
    break;
  case 'mainWithClusteredFeatures':
    mainWithClusteredFeatures();
    break;
  case 'mainWithWmtsLayer':
    mainWithWmtsLayer();
    break;
  case 'mainWithSld':
    mainWithSld();
    break;
}
