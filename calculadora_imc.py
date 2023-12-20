peso = float(input("insira seu peso em (kg): "))
altura = float(input("insira sua altura (m): "))
imc = peso/(altura*2)
print("seu imc é igual a:",round(imc,2))

if imc < 18.5:
    print("abaixo do peso")
elif imc < 24.9:
    print("peso ideal,parabens")
elif imc < 29.9:
    print("levemente acima do peso")
elif imc < 34.9:
    print("obesidade grau 1")
elif imc < 39.9:
    print("obesidade 2 (severa)")
else:
    print("obesidade 3 (morbida)")