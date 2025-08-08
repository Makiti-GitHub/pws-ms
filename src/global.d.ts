export {}

declare global {
	interface String {
		toFirstLetterCapitalize(): string
		toGroupOfThreeDigits(): string
		toCommaSeperatedDigits(): string
		removeAccents(): string
	}
}
